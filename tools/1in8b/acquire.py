#!/usr/bin/env python3
"""Acquire an immutable public 1in8b release, excluding services and telemetry.

Raw evidence is stored outside site/. Re-running validates cached hashes and
downloads newly discovered static dependencies only. No application code runs.
"""
from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import time
from urllib.parse import unquote, urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen

ORIGIN = "https://1in8b.life"
LANGUAGES = "en ko ja zh zh-hans vi fr th es de pt ru tr id it ar fa uk pl".split()
STATIC = re.compile(r"\.(?:js|css|woff2?|ttf|otf|png|jpe?g|webp|avif|svg|ico|gif|webmanifest|mp3|ogg|wav|mp4|webm|json)$", re.I)
JS_RESOURCE = re.compile(r'''["'`]((?:https://1in8b\.life)?/[^\s"'`<>\\]*?\.(?:js|css|woff2?|ttf|otf|png|jpe?g|webp|avif|svg|ico|gif|webmanifest|mp3|ogg|wav|mp4|webm|json))(?:\?[^"'`\s]*)?["'`]''', re.I)


class Resources(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag in ("script", "img", "source", "audio", "video"):
            self.urls.extend(values[k] for k in ("src", "poster") if values.get(k))
        if tag == "link" and set(values.get("rel", "").lower().split()) & {
            "stylesheet", "icon", "apple-touch-icon", "manifest", "preload", "modulepreload"
        } and values.get("href"):
            self.urls.append(values["href"])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parents[3] / "1in8b_2026-11-09")
    parser.add_argument("--version", default="0.9.66")
    parser.add_argument("--workers", type=int, default=6)
    args = parser.parse_args()
    output = args.output.resolve()
    original = output / "original"
    original.mkdir(parents=True, exist_ok=True)
    manifest_path = output / "acquisition.json"
    prior = {}
    if manifest_path.exists():
        old = json.loads(manifest_path.read_text())
        if old.get("version") != args.version:
            raise SystemExit("Existing acquisition version does not match requested version")
        prior = {r["path"]: r for r in old.get("files", [])}
    found, errors, skipped = {}, {}, set()

    def normalize(value, base):
        url = urlsplit(urljoin(base, value))
        if (url.scheme, url.netloc) != ("https", "1in8b.life"):
            if url.scheme in ("http", "https"):
                skipped.add(urlunsplit((url.scheme, url.netloc, url.path, "", "")))
            return None
        if url.path.startswith("/api/") or ".." in unquote(url.path).split("/"):
            return None
        return urlunsplit((url.scheme, url.netloc, url.path, "", ""))

    def relative(url):
        path = unquote(urlsplit(url).path).lstrip("/")
        return path + "index.html" if path.endswith("/") else path

    def acquire(url):
        rel = relative(url)
        dest = original / rel
        cached = prior.get(rel)
        if cached and dest.is_file():
            data = dest.read_bytes()
            if hashlib.sha256(data).hexdigest() == cached["sha256"]:
                return url, data, cached
        failure = None
        for attempt in range(4):
            try:
                request = Request(url, headers={"User-Agent": "Mozilla/5.0", "Referer": ORIGIN + "/zh-hans/"})
                with urlopen(request, timeout=45) as response:
                    if urlsplit(response.url).netloc != "1in8b.life":
                        raise ValueError("Unexpected cross-origin redirect")
                    data = response.read()
                    kind = response.headers.get_content_type()
                if rel.endswith(".js") and (data.lstrip().lower().startswith(b"<!doctype") or "text/html" == kind):
                    raise ValueError("HTML returned for JavaScript asset")
                dest.parent.mkdir(parents=True, exist_ok=True)
                temp = dest.with_suffix(dest.suffix + ".part")
                temp.write_bytes(data)
                temp.replace(dest)
                return url, data, {"url": url, "path": rel, "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest(), "content_type": kind}
            except Exception as exc:
                failure = exc
                if attempt < 3:
                    time.sleep(2 ** attempt)
        raise RuntimeError(str(failure))

    def discover(url, data):
        path = urlsplit(url).path
        text = data.decode("utf-8", errors="replace") if path.endswith(("/", ".html", ".js", ".css", ".webmanifest", ".json")) else ""
        candidates = []
        if path.endswith(("/", ".html")):
            page = Resources()
            page.feed(text)
            candidates.extend(page.urls)
            if path in {"/" + lang + "/" for lang in LANGUAGES}:
                versions = re.findall(r'"softwareVersion"\s*:\s*"([^"]+)"', text)
                if versions != [args.version]:
                    raise ValueError(f"Expected release {args.version}; page declares {versions}")
        if path.endswith(".css"):
            candidates.extend(re.findall(r'''url\(\s*["']?([^\s"')]+)''', text))
        if path.endswith(".js"):
            main_module = re.fullmatch(r"/a/(?:" + "|".join(map(re.escape, LANGUAGES)) + r")\.[0-9a-f]{10}\.js", path)
            if main_module:
                declared = re.search(r'CONFIG=\{version:"([^\"]+)"', text)
                if not declared or not declared.group(1).startswith(args.version + " "):
                    raise ValueError("Main JavaScript release does not match the requested page release")
            candidates.extend(JS_RESOURCE.findall(text))
            for _, value in re.findall(r'''\b(KEEPX_SRC|LATE_SRC|LAB_W)\s*=\s*["']([^"']+)["']''', text):
                candidates.append(value)
            if "/era.js" in text:
                candidates.append("/era.js")
            for group in re.findall(r"importScripts\(([^)]+)\)", text):
                candidates.extend(re.findall(r'''["']([^"']+)["']''', group))
        if path.endswith(".webmanifest"):
            manifest = json.loads(text)
            candidates.extend(icon["src"] for icon in manifest.get("icons", []) if icon.get("src"))
        result = set()
        for value in candidates:
            target = normalize(value, url)
            if target and STATIC.search(urlsplit(target).path):
                result.add(target)
        return result

    def save_manifest():
        record = {
            "source_origin": ORIGIN,
            "version": args.version,
            "acquired_utc": datetime.now(timezone.utc).isoformat(),
            "languages": LANGUAGES,
            "scope": "Public static assets only. The 19 game pages and their main scripts are pinned to the stated release. Country-statistics auxiliary pages were captured on the same date; their unadvertised version is Unknown. API routes and external telemetry are excluded; no application code was executed.",
            "auxiliary_pages": [{"path": lang + "/c/index.html", "role": "country-statistics", "version": "Unknown", "release_association": "same-day auxiliary capture; page declares no software version"} for lang in LANGUAGES if lang != "zh-hans"],
            "files": sorted(found.values(), key=lambda r: r["path"]),
            "excluded_external_urls": sorted(skipped),
            "failures": errors,
        }
        manifest_path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n")

    pending = {ORIGIN + "/" + lang + "/" for lang in LANGUAGES}
    # openChangelog builds this URL dynamically from LP, so it is not a
    # complete literal discoverable in a script resource string.
    pending.update(ORIGIN + "/" + lang + "/notes.json" for lang in LANGUAGES)
    # The simplified-Chinese game's link intentionally falls back to zh/c/;
    # zh-hans/c/ does not exist upstream. Do not synthesize that missing page.
    pending.update(ORIGIN + "/" + lang + "/c/" for lang in LANGUAGES if lang != "zh-hans")
    seen = set()
    wave = 0
    while pending:
        current, pending = sorted(pending - seen), set()
        if not current:
            break
        seen.update(current)
        wave += 1
        print(f"wave {wave}: {len(current)} resources", flush=True)
        with ThreadPoolExecutor(max_workers=max(1, min(args.workers, 12))) as executor:
            jobs = {executor.submit(acquire, url): url for url in current}
            for future in as_completed(jobs):
                url = jobs[future]
                try:
                    _, data, item = future.result()
                    pending.update(discover(url, data))
                    found[item["path"]] = item
                    if item["path"].startswith("a/zh-hans") or item["path"].startswith("keepx"):
                        print("READY " + str(original / item["path"]), flush=True)
                except Exception as exc:
                    errors[url] = str(exc)
                    print("FAILED " + url + ": " + str(exc), flush=True)
        save_manifest()
    total = sum(f["bytes"] for f in found.values())
    print(json.dumps({"version": args.version, "files": len(found), "bytes": total, "failures": errors, "original": str(original)}, ensure_ascii=False), flush=True)
    if errors:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
