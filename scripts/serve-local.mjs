// 零依赖静态预览；严格挂载可暴露误写到站点根目录的资源路径。
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { realpath, stat } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const host = '127.0.0.1';
let port = 8766;
let mount = '/';
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--help' || arg === '-h') {
    console.log('Usage: node scripts/serve-local.mjs [--port 8766] [--mount / | /mini-games/]');
    process.exit(0);
  }
  if (arg === '--port') {
    const value = args[++i];
    if (!/^\d+$/.test(value || '') || Number(value) > 65535) throw new Error('--port must be an integer from 0 to 65535');
    port = Number(value);
  } else if (arg === '--mount') {
    mount = args[++i];
    if (!['/', '/mini-games/'].includes(mount)) throw new Error('--mount must be / or /mini-games/');
  } else throw new Error('Unknown option: ' + arg);
}

const site = await realpath(fileURLToPath(new URL('../site/', import.meta.url)));
const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ogg': 'audio/ogg', '.oga': 'audio/ogg',
  '.aac': 'audio/aac', '.m4a': 'audio/mp4', '.flac': 'audio/flac',
  '.mp4': 'video/mp4', '.m4v': 'video/mp4', '.webm': 'video/webm', '.ogv': 'video/ogg',
  '.mov': 'video/quicktime', '.wasm': 'application/wasm', '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
};
const insideSite = file => file === site || file.startsWith(site + path.sep);
function respond(req, res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(body), 'Cache-Control': 'no-store', ...headers });
  res.end(req.method === 'HEAD' ? undefined : body);
}
function redirect(req, res, rawPath, query) {
  respond(req, res, 301, 'Moved permanently\n', { Location: rawPath + '/' + query });
}

const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) return respond(req, res, 405, 'Method not allowed\n', { Allow: 'GET, HEAD' });
  try {
    const target = req.url || '/';
    const queryIndex = target.indexOf('?');
    const rawPath = queryIndex < 0 ? target : target.slice(0, queryIndex);
    const query = queryIndex < 0 ? '' : target.slice(queryIndex);
    const pathname = decodeURIComponent(rawPath);
    if (!pathname.startsWith('/') || pathname.startsWith('//') || /[\0\\]/.test(pathname) ||
        pathname.split('/').some(part => part === '..' || part === '.')) {
      return respond(req, res, 404, 'Not found\n');
    }
    if (mount !== '/' && pathname === mount.slice(0, -1)) return redirect(req, res, rawPath, query);
    if (!pathname.startsWith(mount)) return respond(req, res, 404, 'Not found\n');
    let file = path.resolve(site, pathname.slice(mount.length));
    if (!insideSite(file)) return respond(req, res, 404, 'Not found\n');
    file = await realpath(file);
    if (!insideSite(file)) return respond(req, res, 404, 'Not found\n');
    let info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) return redirect(req, res, rawPath, query);
      file = await realpath(path.join(file, 'index.html'));
      if (!insideSite(file)) return respond(req, res, 404, 'Not found\n');
      info = await stat(file);
    }
    if (!info.isFile()) return respond(req, res, 404, 'Not found\n');

    let start = 0, end = info.size - 1, status = 200;
    const headers = { 'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': info.size, 'Cache-Control': 'no-store', 'Accept-Ranges': 'bytes',
      'X-Content-Type-Options': 'nosniff' };
    if (req.method === 'GET' && req.headers.range) {
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (range && (range[1] || range[2])) {
        if (range[1]) { start = Number(range[1]); if (range[2]) end = Math.min(Number(range[2]), end); }
        else start = Math.max(0, info.size - Number(range[2]));
        if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= info.size) {
          return respond(req, res, 416, 'Range not satisfiable\n', { 'Content-Range': `bytes */${info.size}` });
        }
        status = 206;
        headers['Content-Range'] = `bytes ${start}-${end}/${info.size}`;
        headers['Content-Length'] = end - start + 1;
      }
    }
    res.writeHead(status, headers);
    if (req.method === 'HEAD' || info.size === 0) return res.end();
    await pipeline(createReadStream(file, { start, end }), res);
  } catch (error) {
    if (res.headersSent) { res.destroy(); return; }
    if (error instanceof URIError || ['ENOENT', 'ENOTDIR', 'EACCES', 'ELOOP'].includes(error.code)) {
      respond(req, res, 404, 'Not found\n');
    } else {
      console.error(error);
      respond(req, res, 500, 'Internal server error\n');
    }
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `Port ${port} is in use. Choose another with --port.` : error.message);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(`Local preview: http://${host}:${server.address().port}${mount}`);
  console.log(`Serving ${site}; press Ctrl+C to stop.`);
});
for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => {
  server.close();
  server.closeAllConnections();
});
