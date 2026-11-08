#!/usr/bin/env python3
"""启动仅本机可访问的静态游戏服务。"""
import argparse
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=8767)
parser.add_argument('--directory', type=Path, default=Path(__file__).resolve().parents[2] / 'site', help='静态根目录；默认仓库 site')
args = parser.parse_args()
directory=args.directory.resolve()
if not directory.is_dir():parser.error(f'目录不存在: {directory}')
handler = functools.partial(SimpleHTTPRequestHandler, directory=str(directory))
server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
print(f'http://127.0.0.1:{args.port}/', flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.server_close()
