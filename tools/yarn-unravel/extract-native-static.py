"""从全部已采集 Cocos import/config 纯静态重建 native 清单及请求路径。

不导入游戏 JS，不启动浏览器，不构造 Cocos 对象，不调用 cc.deserialize。
布局依据随原包保留的 cocos2d-js-min.js modules 95/103/105/118/120/254。
"""
import collections
import hashlib
import json
import pathlib
import sys

ROOT = pathlib.Path(sys.argv[1]).resolve() if len(sys.argv)>1 else pathlib.Path(__file__).resolve().parents[1]
ORIGINAL = ROOT/'original'
ENGINE_SHA256 = '7100e326d3557e24c0e2700e121c06c6df8dd312b36a379989e0e1f28b0e916a'
B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
TEXTURE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.pvr', '.pkm']


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def decode_uuid(value):
    if len(value) != 22:
        return value
    h = value[:2]
    for k in range(2, 22, 2):
        a, b = map(B64.index, value[k:k+2])
        h += f'{a >> 2:x}{((a & 3) << 2) | (b >> 4):x}{b & 15:x}'
    return '-'.join([h[:8], h[8:12], h[12:16], h[16:20], h[20:]])


def root_metadata(compiled):
    assert isinstance(compiled, list) and compiled[0] == 1 and len(compiled) == 11
    instances, types = compiled[5], compiled[6]
    marker = instances[-1]
    has_marker = type(marker) is int
    has_native = has_marker and marker < 0
    root_index = (~marker if marker < 0 else marker) if has_marker else 0
    ordinary_count = len(instances)-(len(types) if isinstance(types, list) else 0)-(1 if has_marker else 0)
    if root_index < ordinary_count:
        instance = instances[root_index]
        mask_index = instance[0]
        mask = compiled[4][mask_index]
        class_index = mask[0]
        descriptor = compiled[3][class_index]
        assert isinstance(descriptor, list)
        root_type = descriptor[0]
        native = None
        value_position = None
        if has_native:
            native_property_index = descriptor[1].index('_native')
            for j in range(1, len(instance)):
                if mask[j] == native_property_index:
                    native, value_position = instance[j], j
                    break
            assert isinstance(native, str) and native
        return root_type, has_native, native, root_index, value_position
    type_index = types[root_index-ordinary_count]
    assert type_index >= 0, 'Unsupported builtin root value'
    root_type = compiled[3][type_index]
    assert isinstance(root_type, str)
    native = None
    if has_native:
        assert root_type == 'cc.Texture2D', 'Unknown custom native deserializer: ' + root_type
        native = texture_native(instances[root_index])
    return root_type, has_native, native, root_index, None


def texture_native(serialized):
    # module120._deserialize 使用逗号第一段；_parseExt 的数字表来自同模块 extnames。
    token = serialized.split(',')[0]
    # 本原包只出现单一 png/jpg token；多候选格式的 GPU 选择不能由静态方法假定。
    assert token in ('0', '1'), 'Unverified texture format selection: ' + token
    return TEXTURE_EXTENSIONS[int(token)]


engine_bytes = (ORIGINAL/'cocos2d-js-min.js').read_bytes()
assert sha256(engine_bytes) == ENGINE_SHA256
engine = engine_bytes.decode()
assert 'i.hasNativeDep=function(t){var e=t[5],i=e[e.length-1];return"number"==typeof i&&i<0}' in engine
assert 'extnames:[".png",".jpg",".jpeg",".bmp",".webp",".pvr",".pkm"]' in engine
spec_bytes = (ROOT/'tools/import-specs.json').read_bytes()
specs = json.loads(spec_bytes)
configs = {}
source_hashes = {}
for path in sorted(ORIGINAL.glob('assets/*/config.json')):
    raw_bytes = path.read_bytes()
    config = json.loads(raw_bytes)
    uuids = [decode_uuid(value) for value in config['uuids']]
    native_versions = config.get('versions', {}).get('native', [])
    versions = {(uuids[native_versions[i]] if type(native_versions[i]) is int else native_versions[i]): native_versions[i+1] for i in range(0, len(native_versions), 2)}
    configs[path.parent.name] = (config, uuids, versions)
    source_hashes[str(path.relative_to(ORIGINAL))] = sha256(raw_bytes)

records = []
origins = []
asset_types = collections.Counter()
native_types = collections.Counter()
texture_tokens = collections.Counter()
file_formats = collections.Counter()
for spec in specs:
    raw_bytes = (ORIGINAL/spec['path']).read_bytes()
    source_hashes[spec['path']] = sha256(raw_bytes)
    raw = json.loads(raw_bytes)
    config, config_uuids, versions = configs[spec['bundle']]
    if spec['pack']:
        expected_pack = [config_uuids[value] if type(value) is int else value for value in config['packs'][spec['uuid']]]
        assert expected_pack == spec['pack']
    if isinstance(raw, dict):
        assert spec['pack'] and raw['type'] == 'cc.Texture2D' and isinstance(raw['data'], str)
        file_formats['texture_dictionary_pack'] += 1
        values = raw['data'].split('|')
        assert len(values) == len(spec['pack'])
        assets = [(uuid, 'cc.Texture2D', True, texture_native(value), index, 0, '/data#pipe-segment:'+str(index)) for index, (uuid, value) in enumerate(zip(spec['pack'], values))]
        texture_tokens.update(value.split(',')[0] for value in values)
    else:
        assert raw[0] == 1
        if spec['pack']:
            file_formats['compiled_array_pack'] += 1
            assert len(raw[5]) == len(spec['pack'])
            inputs = [(uuid, raw[:5]+record, index) for index, (uuid, record) in enumerate(zip(spec['pack'], raw[5]))]
        else:
            file_formats['compiled_single'] += 1
            inputs = [(spec['uuid'], raw, None)]
        assets = []
        for uuid, compiled, pack_index in inputs:
            root_type, has_native, native, root_index, value_position = root_metadata(compiled)
            if root_type == 'cc.Texture2D':
                texture_tokens[compiled[5][root_index].split(',')[0]] += 1
            if value_position is not None:
                pointer = f'/5/{pack_index}/0/{root_index}/{value_position}' if pack_index is not None else f'/5/{root_index}/{value_position}'
            elif has_native:
                pointer = f'/5/{pack_index}/0/{root_index}' if pack_index is not None else f'/5/{root_index}'
            else:
                pointer = None
            assets.append((uuid, root_type, has_native, native, pack_index, root_index, pointer))
    for uuid, root_type, has_native, native, pack_index, root_index, pointer in assets:
        asset_types[root_type] += 1
        if not has_native:
            continue
        assert native
        records.append({'bundle': spec['bundle'], 'uuid': uuid, 'native': native})
        native_types[root_type] += 1
        origins.append({'bundle': spec['bundle'], 'uuid': uuid, 'native': native, 'root_type': root_type, 'import': spec['path'], 'pack_index': pack_index, 'root_index': root_index, 'native_value_pointer': pointer})

records.sort(key=lambda record: (record['bundle'], record['uuid'], record['native']))
assert len({(record['bundle'], record['uuid']) for record in records}) == len(records)
path_specs = []
for record in records:
    config, uuids, versions = configs[record['bundle']]
    uuid, native = record['uuid'], record['native']
    assert not native.startswith('/'), 'Absolute raw native paths require explicit handling'
    suffix = '.'+versions[uuid] if uuid in versions else ''
    base = f'assets/{record["bundle"]}/{config.get("nativeBase", "native")}/{uuid[:2]}/{uuid}{suffix}'
    # modules105/118 传递 __nativeName__；module103.combine 只对 .ttf 使用 uuid/filename。
    path = base+'/'+native if pathlib.PurePosixPath(native).suffix == '.ttf' else base+native
    # 独立静态扩展转换与原 to4399.js/patchAssetTransform 一致。
    if path.endswith('.cconb'):
        path = path[:-6]+'._cconb.dbbin'
    elif path.endswith('.bin'):
        path = path[:-4]+'.dbbin'
    path_specs.append({**record, 'path': path})
assert len({record['path'] for record in path_specs}) == len(path_specs)

legacy_path = ROOT/'tools/native-records.json'
legacy = json.loads(legacy_path.read_bytes()) if legacy_path.exists() else []
legacy_map = {(record['bundle'], record['uuid']): record['native'] for record in legacy}
static_map = {(record['bundle'], record['uuid']): record['native'] for record in records}
legacy_missing = [record for record in legacy if (record['bundle'], record['uuid']) not in static_map]
differences = [{'bundle': key[0], 'uuid': key[1], 'legacy': native, 'static': static_map[key]} for key, native in legacy_map.items() if key in static_map and native != static_map[key]]
extra = [record for record in records if (record['bundle'], record['uuid']) not in legacy_map]
assert not legacy_missing and not differences
summary = {
    'import_files': len(specs), 'import_file_formats': dict(file_formats),
    'total_assets': sum(asset_types.values()), 'asset_types': dict(asset_types),
    'native_assets': len(records), 'native_types': dict(native_types),
    'native_values': dict(collections.Counter(record['native'] for record in records)),
    'texture_extension_tokens': dict(texture_tokens),
    'legacy_native_records': len(legacy), 'legacy_records_missing_from_static': legacy_missing,
    'legacy_value_differences': differences, 'additional_to_legacy': len(extra),
    'all_pack_orders_matched_config': True, 'unique_native_paths': len(path_specs),
}
(ROOT/'tools/static-native-records.json').write_text(json.dumps(records, ensure_ascii=False, indent=2)+'\n')
(ROOT/'tools/static-native-specs.json').write_text(json.dumps(path_specs, ensure_ascii=False, indent=2)+'\n')
(ROOT/'tools/static-native-origins.json').write_text(json.dumps(origins, ensure_ascii=False, indent=2)+'\n')
report = {
    'method': 'Pure static original JSON field inspection; no application code execution or deserialization.',
    'engine_sha256': ENGINE_SHA256, 'engine_modules': [95, 103, 105, 118, 120, 254],
    'extractor_sha256': sha256(pathlib.Path(__file__).read_bytes()),
    'input_specs_sha256': sha256(spec_bytes),
    'legacy_records_sha256': sha256(legacy_path.read_bytes()) if legacy_path.exists() else None,
    'source_sha256': source_hashes, 'summary': summary,
    'limitations': ['Texture sources here contain only one png/jpg alternative each; multi-format GPU selection is not inferred.', 'Expected native files are identified statically; successful download is a separate verification.', 'This does not establish all-mode playability or absence of dependencies inside opaque binary resources.'],
}
(ROOT/'evidence/native-static-inventory.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
print(json.dumps(summary, ensure_ascii=False, indent=2))
