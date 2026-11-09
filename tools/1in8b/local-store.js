/* Local persistence for the static 1in8b edition. No account or network service. */
(() => {
  'use strict';
  const namespace = 'mini-games:1in8b:v1:';
  const archiveName = namespace + 'archive';
  const databases = new Set([archiveName, namespace + 'past']);
  const nativeStorage = window.localStorage;
  const MAX_BYTES = 256 * 1024 * 1024;
  const MAX_ITEMS = 1000000;
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const fail = message => { throw new Error(message); };
  const storageKeys = () => {
    const result = [];
    for (let i = 0; i < nativeStorage.length; i++) {
      const key = nativeStorage.key(i);
      if (key && key.startsWith(namespace)) result.push(key.slice(namespace.length));
    }
    return result;
  };
  const storage = {
    get length() { return storageKeys().length; },
    key(index) { return storageKeys()[Number(index)] ?? null; },
    getItem(key) { return nativeStorage.getItem(namespace + String(key)); },
    setItem(key, value) { nativeStorage.setItem(namespace + String(key), String(value)); },
    removeItem(key) { nativeStorage.removeItem(namespace + String(key)); },
    clear() { for (const key of storageKeys()) nativeStorage.removeItem(namespace + key); },
  };
  const request = req => new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('IndexedDB request failed'));
  });
  const completed = transaction => new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onabort = () => reject(transaction.error || new Error('IndexedDB transaction aborted'));
    transaction.onerror = () => {}; // Abort is the authoritative transaction result.
  });
  function openArchive() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(archiveName, 1);
      req.onupgradeneeded = () => req.result.createObjectStore('records', { keyPath: 'key' });
      req.onerror = () => reject(req.error || new Error('Cannot open local archive'));
      req.onblocked = () => reject(new Error('Close other game tabs and try again'));
      req.onsuccess = () => {
        const db = req.result;
        db.onversionchange = () => db.close();
        resolve(db);
      };
    });
  }
  const ready = openArchive();
  // A rejected startup is surfaced by the first requested operation or toolbar action.
  ready.catch(() => {});
  function recordKey(kind, id) {
    if (typeof kind !== 'string' || !/^[a-z][a-z0-9_-]{0,63}$/i.test(kind)) fail('Invalid local record kind');
    if (id == null || String(id).length > 1024) fail('Invalid local record id');
    return kind + ':' + String(id);
  }
  async function get(kind, id) {
    const db = await ready;
    const row = await request(db.transaction('records').objectStore('records').get(recordKey(kind, id)));
    return row ? row.value : null;
  }
  async function put(kind, id, value) {
    const key = recordKey(kind, id);
    if (value === undefined) fail('A local record must have a value');
    const db = await ready;
    const tx = db.transaction('records', 'readwrite');
    const done = completed(tx);
    tx.objectStore('records').put({ key, kind, value, updatedAt: Date.now() });
    await done;
    return value;
  }
  async function remove(kind, id) {
    const db = await ready;
    const tx = db.transaction('records', 'readwrite');
    const done = completed(tx);
    tx.objectStore('records').delete(recordKey(kind, id));
    await done;
  }
  async function list(kind) {
    recordKey(kind, '');
    const db = await ready;
    const lower = kind + ':';
    const rows = await request(db.transaction('records').objectStore('records').getAll(IDBKeyRange.bound(lower, lower + '\uffff')));
    return rows.sort((a, b) => b.updatedAt - a.updatedAt).map(row => row.value);
  }
  function registerDatabase(name) {
    if (typeof name !== 'string' || !name.startsWith(namespace) || name.length > 256) fail('Database must belong to this game');
    databases.add(name);
    return name;
  }
  const bytes64 = bytes => {
    let text = '';
    for (let offset = 0; offset < bytes.length; offset += 16384) text += String.fromCharCode(...bytes.subarray(offset, offset + 16384));
    return btoa(text);
  };
  const from64 = text => {
    if (typeof text !== 'string' || text.length > MAX_BYTES * 1.4 || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(text)) fail('Invalid binary backup value');
    const raw = atob(text), bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    return bytes;
  };
  const typedArrays = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, DataView };
  if (typeof BigInt64Array !== 'undefined') typedArrays.BigInt64Array = BigInt64Array;
  if (typeof BigUint64Array !== 'undefined') typedArrays.BigUint64Array = BigUint64Array;
  async function encode(value, depth = 0, seen = new Set()) {
    if (depth > 100) fail('Backup value is too deeply nested');
    if (value === null) return ['null'];
    if (value === undefined) return ['undefined'];
    if (typeof value === 'string' || typeof value === 'boolean') return [typeof value, value];
    if (typeof value === 'number') return ['number', Number.isFinite(value) ? value : String(value)];
    if (typeof value === 'bigint') return ['bigint', String(value)];
    if (typeof value !== 'object') fail('Unsupported backup value');
    if (seen.has(value)) fail('Circular backup values are not supported');
    if (value instanceof Date) return ['date', value.toISOString()];
    if (value instanceof Blob) return ['blob', value.type, bytes64(new Uint8Array(await value.arrayBuffer()))];
    if (value instanceof ArrayBuffer) return ['buffer', bytes64(new Uint8Array(value))];
    if (ArrayBuffer.isView(value)) return ['typed', value.constructor.name, bytes64(new Uint8Array(value.buffer, value.byteOffset, value.byteLength))];
    seen.add(value);
    let result;
    if (Array.isArray(value)) result = ['array', await Promise.all(Array.from(value, entry => encode(entry, depth + 1, new Set(seen))))];
    else if (value instanceof Map) result = ['map', await Promise.all(Array.from(value, async ([key, entry]) => [await encode(key, depth + 1, new Set(seen)), await encode(entry, depth + 1, new Set(seen))]))];
    else if (value instanceof Set) result = ['set', await Promise.all(Array.from(value, entry => encode(entry, depth + 1, new Set(seen))))];
    else if (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null) result = ['object', await Promise.all(Object.entries(value).map(async ([key, entry]) => [key, await encode(entry, depth + 1, new Set(seen))]))];
    else fail('Unsupported backup object type');
    return result;
  }
  function decode(value, budget, depth = 0) {
    if (++budget.items > MAX_ITEMS || depth > 100 || !Array.isArray(value) || typeof value[0] !== 'string') fail('Invalid backup value');
    const [type, a, b] = value;
    const size = count => { if (value.length !== count) fail('Invalid backup value shape'); };
    if (type === 'null' || type === 'undefined') { size(1); return type === 'null' ? null : undefined; }
    if (type === 'string' || type === 'boolean') { size(2); if (typeof a !== type) fail('Invalid backup primitive'); return a; }
    if (type === 'number') { size(2); if (typeof a === 'number' && Number.isFinite(a)) return a; if (a === 'NaN') return NaN; if (a === 'Infinity') return Infinity; if (a === '-Infinity') return -Infinity; fail('Invalid backup number'); }
    if (type === 'bigint') { size(2); if (typeof a !== 'string' || !/^-?\d{1,10000}$/.test(a)) fail('Invalid backup bigint'); return BigInt(a); }
    if (type === 'date') { size(2); if (typeof a !== 'string' || !Number.isFinite(Date.parse(a))) fail('Invalid backup date'); return new Date(a); }
    if (type === 'buffer') { size(2); return from64(a).buffer; }
    if (type === 'typed') { size(3); if (typeof a !== 'string' || !own(typedArrays, a)) fail('Invalid typed backup value'); return new typedArrays[a](from64(b).buffer); }
    if (type === 'blob') { size(3); if (typeof a !== 'string' || a.length > 512) fail('Invalid backup Blob type'); return new Blob([from64(b)], { type: a }); }
    size(2);
    if (!Array.isArray(a)) fail('Invalid backup collection');
    if (type === 'array') return a.map(entry => decode(entry, budget, depth + 1));
    if (type === 'set') return new Set(a.map(entry => decode(entry, budget, depth + 1)));
    if (type === 'map') return new Map(a.map(entry => {
      if (!Array.isArray(entry) || entry.length !== 2) fail('Invalid backup Map');
      return [decode(entry[0], budget, depth + 1), decode(entry[1], budget, depth + 1)];
    }));
    if (type === 'object') {
      const object = {};
      for (const entry of a) {
        if (!Array.isArray(entry) || entry.length !== 2 || typeof entry[0] !== 'string' || own(object, entry[0])) fail('Invalid backup object');
        Object.defineProperty(object, entry[0], { value: decode(entry[1], budget, depth + 1), enumerable: true, configurable: true, writable: true });
      }
      return object;
    }
    fail('Unsupported backup value tag');
  }
  async function openExisting(name) {
    if (typeof indexedDB.databases === 'function' && !(await indexedDB.databases()).some(row => row.name === name)) return null;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(name);
      let missing = false;
      req.onupgradeneeded = () => { missing = true; req.transaction.abort(); };
      req.onerror = () => missing ? resolve(null) : reject(req.error);
      req.onsuccess = () => resolve(req.result);
      req.onblocked = () => reject(new Error('Close other game tabs and try again'));
    });
  }
  function keyPathValid(value) {
    return value === null || typeof value === 'string' && value.length <= 1024 || Array.isArray(value) && value.every(item => typeof item === 'string' && item.length <= 1024);
  }
  async function snapshotDatabase(name) {
    const db = await openExisting(name);
    if (!db) return null;
    try {
      const result = { name, version: db.version, stores: [] };
      for (const storeName of db.objectStoreNames) {
        const tx = db.transaction(storeName), store = tx.objectStore(storeName);
        const done = completed(tx);
        const keysP = request(store.getAllKeys()), valuesP = request(store.getAll());
        const indexes = Array.from(store.indexNames, name => {
          const index = store.index(name);
          return { name, keyPath: index.keyPath, unique: index.unique, multiEntry: index.multiEntry };
        });
        const [keys, values] = await Promise.all([keysP, valuesP]);
        await done;
        const entries = await Promise.all(keys.map(async (key, i) => ({ key: await encode(key), value: await encode(values[i]) })));
        result.stores.push({ name: storeName, keyPath: store.keyPath, autoIncrement: store.autoIncrement, indexes, entries });
      }
      return result;
    } finally { db.close(); }
  }
  let importing = false, exporting = false, needsReload = false;
  async function exportBackup() {
    if (importing || exporting) fail('Another backup operation is running');
    exporting = true;
    try {
      await ready;
      if (typeof window.One8bBeforeBackup === 'function') await window.One8bBeforeBackup();
      const waits = [];
      window.dispatchEvent(new CustomEvent('one8b:beforeexport', { detail: { waitUntil: promise => waits.push(Promise.resolve(promise)) } }));
      await Promise.all(waits);
      const local = Object.create(null);
      for (const key of storageKeys()) local[key] = storage.getItem(key);
      const snapshots = [];
      for (const name of databases) {
        const snapshot = await snapshotDatabase(name);
        if (snapshot) snapshots.push(snapshot);
      }
      const blob = new Blob([JSON.stringify({ format: 'one8b-local-backup', version: 1, namespace, createdAt: new Date().toISOString(), storage: local, databases: snapshots })], { type: 'application/json' });
      if (blob.size > MAX_BYTES) fail('Backup exceeds the 256 MB limit');
      return blob;
    } finally {
      exporting = false;
      window.dispatchEvent(new CustomEvent('one8b:afterexport'));
    }
  }
  const keyFingerprint = key => {
    try { indexedDB.cmp(key, key); } catch { fail('Invalid IndexedDB backup key'); }
    if (typeof key === 'number') return 'n' + key;
    if (typeof key === 'string') return 's' + JSON.stringify(key);
    if (key instanceof Date) return 'd' + key.getTime();
    if (Array.isArray(key)) return 'a' + JSON.stringify(key.map(keyFingerprint));
    return 'b' + bytes64(key instanceof ArrayBuffer ? new Uint8Array(key) : new Uint8Array(key.buffer, key.byteOffset, key.byteLength));
  };
  const inlineKey = (value, keyPath) => {
    if (Array.isArray(keyPath)) return keyPath.map(path => inlineKey(value, path));
    if (!keyPath) return value;
    return keyPath.split('.').reduce((object, part) => object != null ? object[part] : undefined, value);
  };
  function validateBackup(raw) {
    if (!raw || typeof raw !== 'object' || raw.format !== 'one8b-local-backup' || raw.version !== 1 || raw.namespace !== namespace) fail('This is not a supported 1in8b backup');
    if (!raw.storage || typeof raw.storage !== 'object' || Array.isArray(raw.storage) || !Array.isArray(raw.databases)) fail('Invalid backup manifest');
    const local = Object.entries(raw.storage);
    if (local.length > MAX_ITEMS) fail('Too many backup storage entries');
    for (const [key, value] of local) if (key.length > 4096 || typeof value !== 'string') fail('Invalid backup storage entry');
    const names = new Set(), budget = { items: 0 };
    const specs = raw.databases.map(spec => {
      if (!spec || typeof spec.name !== 'string' || !spec.name.startsWith(namespace) || spec.name.length > 256 || names.has(spec.name)) fail('Invalid backup database name');
      names.add(spec.name);
      if (!Number.isSafeInteger(spec.version) || spec.version < 1 || spec.version > 100000 || !Array.isArray(spec.stores) || spec.stores.length > 100) fail('Invalid backup database schema');
      if (spec.name === archiveName || spec.name === namespace + 'past') {
        const expected = spec.name === archiveName ? { name: 'records', keyPath: 'key' } : { name: 'past', keyPath: null };
        const store = spec.stores[0];
        if (spec.version !== 1 || spec.stores.length !== 1 || !store || store.name !== expected.name || store.keyPath !== expected.keyPath || store.autoIncrement !== false || !Array.isArray(store.indexes) || store.indexes.length !== 0) fail('Backup database does not match this game version');
      }
      const stores = new Set();
      return { name: spec.name, version: spec.version, stores: spec.stores.map(store => {
        if (!store || typeof store.name !== 'string' || !store.name || store.name.length > 256 || stores.has(store.name) || !keyPathValid(store.keyPath) || typeof store.autoIncrement !== 'boolean' || !Array.isArray(store.entries) || !Array.isArray(store.indexes)) fail('Invalid backup object store');
        stores.add(store.name);
        const indexes = new Set();
        for (const index of store.indexes) {
          if (!index || typeof index.name !== 'string' || !index.name || indexes.has(index.name) || !keyPathValid(index.keyPath) || index.keyPath === null || typeof index.unique !== 'boolean' || typeof index.multiEntry !== 'boolean') fail('Invalid backup index');
          indexes.add(index.name);
        }
        const keys = new Set();
        const entries = store.entries.map(entry => {
          if (!entry || !own(entry, 'key') || !own(entry, 'value')) fail('Invalid backup database entry');
          const key = decode(entry.key, budget), value = decode(entry.value, budget), fingerprint = keyFingerprint(key);
          if (keys.has(fingerprint)) fail('Duplicate backup database key');
          keys.add(fingerprint);
          if (store.keyPath !== null && keyFingerprint(inlineKey(value, store.keyPath)) !== fingerprint) fail('Backup inline key does not match');
          return { key, value };
        });
        return { ...store, entries };
      }) };
    });
    return { local, specs };
  }
  async function openForImport(spec) {
    const existing = await openExisting(spec.name);
    if (existing) {
      for (const store of spec.stores) {
        if (!existing.objectStoreNames.contains(store.name)) { existing.close(); fail('Backup schema differs from the installed game'); }
        const current = existing.transaction(store.name).objectStore(store.name);
        if (JSON.stringify(current.keyPath) !== JSON.stringify(store.keyPath) || current.autoIncrement !== store.autoIncrement) { existing.close(); fail('Backup storage schema differs from the installed game'); }
      }
      return existing;
    }
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(spec.name, spec.version);
      req.onupgradeneeded = () => {
        for (const store of spec.stores) {
          const target = req.result.createObjectStore(store.name, { keyPath: store.keyPath, autoIncrement: store.autoIncrement });
          for (const index of store.indexes) target.createIndex(index.name, index.keyPath, { unique: index.unique, multiEntry: index.multiEntry });
        }
      };
      req.onerror = () => reject(req.error || new Error('Cannot create backup database'));
      req.onblocked = () => reject(new Error('Close other game tabs and try again'));
      req.onsuccess = () => resolve(req.result);
    });
  }
  async function importBackup(input) {
    if (importing || exporting) fail('Another backup operation is running');
    if (input instanceof Blob && input.size > MAX_BYTES) fail('Backup exceeds the 256 MB limit');
    const text = typeof input === 'string' ? input : input instanceof Blob ? await input.text() : fail('Choose a JSON backup file');
    if (new Blob([text]).size > MAX_BYTES) fail('Backup exceeds the 256 MB limit');
    // Fully parse, decode and validate before any persistent write.
    const { local, specs } = validateBackup(JSON.parse(text));
    await ready;
    // Another caller may have acquired the lock while this file was read.
    if (importing || exporting) fail('Another backup operation is running');
    importing = true;
    const connections = [], inserted = [], localInserted = [];
    const stats = { imported: 0, skipped: 0 };
    try {
      const waits = [];
      window.dispatchEvent(new CustomEvent('one8b:beforeimport', { detail: { waitUntil: promise => waits.push(Promise.resolve(promise)) } }));
      await Promise.all(waits);
      for (const spec of specs) {
        const db = await openForImport(spec);
        connections.push(db);
        const candidates = [];
        for (const store of spec.stores) {
          const tx = db.transaction(store.name), source = tx.objectStore(store.name), done = completed(tx);
          const present = await Promise.all(store.entries.map(entry => request(source.getKey(entry.key))));
          await done;
          const entries = store.entries.filter((entry, i) => {
            if (present[i] !== undefined) { stats.skipped++; return false; }
            return true;
          });
          if (entries.length) candidates.push({ ...store, entries });
        }
        if (candidates.length) {
          const tx = db.transaction(candidates.map(store => store.name), 'readwrite'), done = completed(tx);
          for (const store of candidates) {
            const target = tx.objectStore(store.name);
            for (const entry of store.entries) store.keyPath === null ? target.add(entry.value, entry.key) : target.add(entry.value);
          }
          await done;
          for (const store of candidates) {
            inserted.push({ db, store: store.name, keys: store.entries.map(entry => entry.key) });
            stats.imported += store.entries.length;
          }
        }
      }
      for (const [key, value] of local) {
        if (storage.getItem(key) !== null) { stats.skipped++; continue; }
        storage.setItem(key, value);
        localInserted.push(key);
        stats.imported++;
      }
      for (const spec of specs) registerDatabase(spec.name);
      if (stats.imported) needsReload = true;
      window.dispatchEvent(new CustomEvent('one8b:afterimport', { detail: { ok: true, ...stats } }));
      return stats;
    } catch (error) {
      const rollbackErrors = [];
      for (const key of localInserted.reverse()) { try { storage.removeItem(key); } catch (failure) { rollbackErrors.push(failure); } }
      for (const row of inserted.reverse()) {
        try {
          const tx = row.db.transaction(row.store, 'readwrite'), done = completed(tx), store = tx.objectStore(row.store);
          for (const key of row.keys) store.delete(key);
          await done;
        } catch (failure) { rollbackErrors.push(failure); }
      }
      window.dispatchEvent(new CustomEvent('one8b:afterimport', { detail: { ok: false } }));
      if (rollbackErrors.length) fail('Import failed; rollback was interrupted. Existing records were not overwritten.');
      throw error;
    } finally {
      for (const db of connections) db.close();
      importing = false;
    }
  }
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob), anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.hidden = true;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
  // [home, export, import, local-only note, busy, saved, imported, failed, reload]
  const messages = {
    'zh-hans': ['返回小游戏乐园', '导出本地备份', '导入本地备份', '记录仅保存在此浏览器，建议定期备份。', '正在处理…', '备份已导出。', '导入完成；现有记录已保留。刷新后查看。', '操作失败，原有记录保留。', '刷新查看'],
    zh: ['返回小遊戲樂園', '匯出本機備份', '匯入本機備份', '紀錄僅儲存在此瀏覽器，建議定期備份。', '處理中…', '備份已匯出。', '匯入完成；現有紀錄已保留。重新整理後查看。', '操作失敗，原有紀錄保留。', '重新整理'],
    en: ['Back to Mini Games', 'Export local backup', 'Import local backup', 'Records stay in this browser. Back them up regularly.', 'Working…', 'Backup exported.', 'Imported. Existing records kept. Reload to view.', 'Could not finish. Existing records kept.', 'Reload'],
    ko: ['미니게임으로 돌아가기', '로컬 백업 내보내기', '로컬 백업 가져오기', '기록은 이 브라우저에만 저장돼요. 정기적으로 백업해 주세요.', '처리 중…', '백업을 내보냈어요.', '가져왔어요. 기존 기록은 유지돼요. 새로고침해 주세요.', '완료하지 못했어요. 기존 기록은 유지돼요.', '새로고침'],
    ja: ['ミニゲームに戻る', 'ローカルバックアップを書き出す', 'ローカルバックアップを読み込む', '記録はこのブラウザにだけ保存されます。定期的にバックアップしてください。', '処理中…', 'バックアップを書き出しました。', '読み込みました。既存の記録は保持されます。再読み込みしてください。', '完了できませんでした。既存の記録は保持されます。', '再読み込み'],
    vi: ['Về trò chơi nhỏ', 'Xuất bản sao lưu cục bộ', 'Nhập bản sao lưu cục bộ', 'Dữ liệu chỉ lưu trong trình duyệt này. Hãy sao lưu thường xuyên.', 'Đang xử lý…', 'Đã xuất bản sao lưu.', 'Đã nhập và giữ nguyên dữ liệu hiện có. Tải lại để xem.', 'Không thể hoàn tất. Dữ liệu hiện có vẫn được giữ.', 'Tải lại'],
    fr: ['Retour aux mini-jeux', 'Exporter la sauvegarde locale', 'Importer une sauvegarde locale', 'Les données restent dans ce navigateur. Sauvegardez-les régulièrement.', 'Traitement…', 'Sauvegarde exportée.', 'Import terminé. Données existantes conservées. Rechargez la page.', 'Impossible de terminer. Données existantes conservées.', 'Recharger'],
    th: ['กลับไปมินิเกม', 'ส่งออกข้อมูลสำรองในเครื่อง', 'นำเข้าข้อมูลสำรองในเครื่อง', 'ข้อมูลอยู่ในเบราว์เซอร์นี้เท่านั้น ควรสำรองข้อมูลเป็นประจำ', 'กำลังดำเนินการ…', 'ส่งออกข้อมูลสำรองแล้ว', 'นำเข้าแล้วและเก็บข้อมูลเดิมไว้ โหลดหน้าใหม่เพื่อดู', 'ดำเนินการไม่สำเร็จ ข้อมูลเดิมยังอยู่', 'โหลดใหม่'],
    es: ['Volver a los minijuegos', 'Exportar copia local', 'Importar copia local', 'Los datos solo se guardan en este navegador. Haz copias periódicas.', 'Procesando…', 'Copia exportada.', 'Importación completada. Datos anteriores conservados. Recarga la página.', 'No se pudo completar. Los datos anteriores se conservan.', 'Recargar'],
    de: ['Zurück zu den Minispielen', 'Lokale Sicherung exportieren', 'Lokale Sicherung importieren', 'Daten bleiben in diesem Browser. Bitte regelmäßig sichern.', 'Wird verarbeitet…', 'Sicherung exportiert.', 'Importiert. Vorhandene Daten bleiben erhalten. Seite neu laden.', 'Vorgang fehlgeschlagen. Vorhandene Daten bleiben erhalten.', 'Neu laden'],
    pt: ['Voltar aos minijogos', 'Exportar backup local', 'Importar backup local', 'Os dados ficam apenas neste navegador. Faça backups regulares.', 'Processando…', 'Backup exportado.', 'Importação concluída. Dados anteriores preservados. Recarregue a página.', 'Não foi possível concluir. Os dados anteriores foram preservados.', 'Recarregar'],
    ru: ['К мини-играм', 'Экспорт локальной копии', 'Импорт локальной копии', 'Записи хранятся только в этом браузере. Регулярно делайте копии.', 'Обработка…', 'Копия экспортирована.', 'Импорт завершён. Прежние записи сохранены. Обновите страницу.', 'Не удалось завершить. Прежние записи сохранены.', 'Обновить'],
    tr: ['Mini oyunlara dön', 'Yerel yedeği dışa aktar', 'Yerel yedeği içe aktar', 'Kayıtlar yalnızca bu tarayıcıda saklanır. Düzenli yedek alın.', 'İşleniyor…', 'Yedek dışa aktarıldı.', 'İçe aktarıldı. Mevcut kayıtlar korundu. Sayfayı yenileyin.', 'Tamamlanamadı. Mevcut kayıtlar korundu.', 'Yenile'],
    id: ['Kembali ke permainan mini', 'Ekspor cadangan lokal', 'Impor cadangan lokal', 'Catatan hanya disimpan di browser ini. Cadangkan secara berkala.', 'Memproses…', 'Cadangan diekspor.', 'Impor selesai. Catatan lama tetap disimpan. Muat ulang halaman.', 'Tidak dapat menyelesaikan. Catatan lama tetap disimpan.', 'Muat ulang'],
    it: ['Torna ai minigiochi', 'Esporta backup locale', 'Importa backup locale', 'I dati restano in questo browser. Esegui backup regolari.', 'Elaborazione…', 'Backup esportato.', 'Importazione completata. Dati esistenti conservati. Ricarica la pagina.', 'Impossibile completare. Dati esistenti conservati.', 'Ricarica'],
    ar: ['العودة إلى الألعاب المصغرة', 'تصدير نسخة احتياطية محلية', 'استيراد نسخة احتياطية محلية', 'تُحفظ السجلات في هذا المتصفح فقط. أنشئ نسخًا احتياطية بانتظام.', 'جارٍ التنفيذ…', 'تم تصدير النسخة الاحتياطية.', 'تم الاستيراد مع الاحتفاظ بالسجلات الحالية. أعد تحميل الصفحة.', 'تعذر الإكمال. تم الاحتفاظ بالسجلات الحالية.', 'إعادة التحميل'],
    fa: ['بازگشت به بازی‌های کوچک', 'برون‌بری پشتیبان محلی', 'درون‌ریزی پشتیبان محلی', 'داده‌ها فقط در این مرورگر ذخیره می‌شوند. مرتب نسخهٔ پشتیبان بگیرید.', 'در حال پردازش…', 'پشتیبان صادر شد.', 'درون‌ریزی انجام شد و داده‌های قبلی حفظ شدند. صفحه را بازآوری کنید.', 'عملیات کامل نشد. داده‌های قبلی حفظ شدند.', 'بازآوری'],
    uk: ['До мініігор', 'Експорт локальної копії', 'Імпорт локальної копії', 'Записи зберігаються лише в цьому браузері. Регулярно робіть копії.', 'Обробка…', 'Копію експортовано.', 'Імпорт завершено. Наявні записи збережено. Оновіть сторінку.', 'Не вдалося завершити. Наявні записи збережено.', 'Оновити'],
    pl: ['Wróć do minigier', 'Eksportuj lokalną kopię', 'Importuj lokalną kopię', 'Dane są zapisane tylko w tej przeglądarce. Regularnie twórz kopie.', 'Przetwarzanie…', 'Kopia wyeksportowana.', 'Import zakończony. Obecne dane zachowano. Odśwież stronę.', 'Nie udało się zakończyć. Obecne dane zachowano.', 'Odśwież'],
  };
  // Short labels for the game's archive panels: localOnly, empty, saved, failed.
  const archiveMessages = {
    'zh-hans': ['仅保存在此浏览器。', '这里还没有本地记录。', '已保存到此浏览器。', '操作失败，原有记录保留。'],
    zh: ['僅儲存在此瀏覽器。', '這裡還沒有本機紀錄。', '已儲存至此瀏覽器。', '操作失敗，原有紀錄保留。'],
    en: ['Saved only in this browser.', 'No local records yet.', 'Saved in this browser.', 'Could not finish. Existing records kept.'],
    ko: ['이 브라우저에만 저장돼요.', '아직 로컬 기록이 없어요.', '이 브라우저에 저장했어요.', '완료하지 못했어요. 기존 기록은 유지돼요.'],
    ja: ['このブラウザにだけ保存されます。', 'ローカルの記録はまだありません。', 'このブラウザに保存しました。', '完了できませんでした。既存の記録は保持されます。'],
    vi: ['Chỉ lưu trong trình duyệt này.', 'Chưa có dữ liệu cục bộ.', 'Đã lưu trong trình duyệt này.', 'Không thể hoàn tất. Dữ liệu hiện có vẫn được giữ.'],
    fr: ['Enregistré uniquement dans ce navigateur.', 'Aucune donnée locale pour le moment.', 'Enregistré dans ce navigateur.', 'Impossible de terminer. Données existantes conservées.'],
    th: ['บันทึกในเบราว์เซอร์นี้เท่านั้น', 'ยังไม่มีข้อมูลในเครื่อง', 'บันทึกในเบราว์เซอร์นี้แล้ว', 'ดำเนินการไม่สำเร็จ ข้อมูลเดิมยังอยู่'],
    es: ['Guardado solo en este navegador.', 'Aún no hay datos locales.', 'Guardado en este navegador.', 'No se pudo completar. Los datos anteriores se conservan.'],
    de: ['Nur in diesem Browser gespeichert.', 'Noch keine lokalen Einträge.', 'In diesem Browser gespeichert.', 'Vorgang fehlgeschlagen. Vorhandene Daten bleiben erhalten.'],
    pt: ['Salvo apenas neste navegador.', 'Ainda não há registros locais.', 'Salvo neste navegador.', 'Não foi possível concluir. Os dados anteriores foram preservados.'],
    ru: ['Хранится только в этом браузере.', 'Локальных записей пока нет.', 'Сохранено в этом браузере.', 'Не удалось завершить. Прежние записи сохранены.'],
    tr: ['Yalnızca bu tarayıcıda saklanır.', 'Henüz yerel kayıt yok.', 'Bu tarayıcıya kaydedildi.', 'Tamamlanamadı. Mevcut kayıtlar korundu.'],
    id: ['Hanya disimpan di browser ini.', 'Belum ada catatan lokal.', 'Disimpan di browser ini.', 'Tidak dapat menyelesaikan. Catatan lama tetap disimpan.'],
    it: ['Salvato solo in questo browser.', 'Nessun dato locale per ora.', 'Salvato in questo browser.', 'Impossibile completare. Dati esistenti conservati.'],
    ar: ['محفوظ في هذا المتصفح فقط.', 'لا توجد سجلات محلية بعد.', 'تم الحفظ في هذا المتصفح.', 'تعذر الإكمال. تم الاحتفاظ بالسجلات الحالية.'],
    fa: ['فقط در این مرورگر ذخیره می‌شود.', 'هنوز دادهٔ محلی وجود ندارد.', 'در این مرورگر ذخیره شد.', 'عملیات کامل نشد. داده‌های قبلی حفظ شدند.'],
    uk: ['Зберігається лише в цьому браузері.', 'Локальних записів ще немає.', 'Збережено в цьому браузері.', 'Не вдалося завершити. Наявні записи збережено.'],
    pl: ['Zapisane tylko w tej przeglądarce.', 'Nie ma jeszcze lokalnych zapisów.', 'Zapisano w tej przeglądarce.', 'Nie udało się zakończyć. Obecne dane zachowano.'],
  };
  function text(key, locale = document.documentElement.lang) {
    locale = locale === 'zh-Hans' || locale === 'zh-CN' ? 'zh-hans' : locale === 'zh-Hant' || locale === 'zh-TW' ? 'zh' : locale;
    const index = ['localOnly', 'empty', 'saved', 'failed'].indexOf(key);
    return index < 0 ? key : (archiveMessages[locale] || archiveMessages.en)[index];
  }
  function mountToolbar({ locale = 'en', baseUrl = '../', portalLanguage = 'zh-CN' } = {}) {
    if (document.getElementById('one8b-local-toolbar')) return document.getElementById('one8b-local-toolbar');
    const m = messages[locale] || messages.en;
    const bar = document.createElement('aside');
    bar.id = 'one8b-local-toolbar';
    bar.setAttribute('aria-label', m[3]);
    const style = document.createElement('style');
    style.textContent = '#one8b-local-toolbar{box-sizing:border-box;display:flex;flex-wrap:wrap;align-items:center;gap:.45rem .65rem;width:min(100% - 24px,1100px);margin:10px auto;padding:9px 12px;border:1px solid #d6ddd7;border-radius:10px;background:#f5f7f3;color:#344b42;font:12px/1.5 system-ui,sans-serif}#one8b-local-toolbar a,#one8b-local-toolbar button{color:inherit;font:inherit;text-decoration:none;border:1px solid #c4cfc6;border-radius:6px;background:transparent;padding:5px 9px;cursor:pointer}#one8b-local-toolbar a{margin-inline-end:auto}#one8b-local-toolbar button:disabled{opacity:.6;cursor:wait}#one8b-local-toolbar .one8b-local-note{flex-basis:100%;font-size:11px}#one8b-local-toolbar .one8b-local-status{flex-basis:100%;overflow-wrap:anywhere}#one8b-local-toolbar [hidden]{display:none!important}';
    document.head.appendChild(style);
    const home = document.createElement('a');
    const game = new URL(baseUrl, location.href);
    if (!game.pathname.endsWith('/')) game.pathname += '/';
    const portal = new URL('../../', game);
    portal.searchParams.set('lang', portalLanguage === 'en' ? 'en' : 'zh-CN');
    home.href = portal.href;
    home.textContent = m[0];
    const exportButton = document.createElement('button'), importButton = document.createElement('button'), reload = document.createElement('button'), input = document.createElement('input');
    for (const button of [exportButton, importButton, reload]) button.type = 'button';
    exportButton.textContent = m[1]; exportButton.id = 'one8b-export-backup'; exportButton.dataset.one8bExport = '';
    importButton.textContent = m[2]; importButton.id = 'one8b-import-backup';
    reload.textContent = m[8]; reload.hidden = true; reload.id = 'one8b-reload-backup';
    input.type = 'file'; input.accept = '.json,application/json'; input.hidden = true; input.id = 'one8b-backup-file';
    const note = document.createElement('span'), status = document.createElement('span');
    note.className = 'one8b-local-note'; note.textContent = m[3];
    status.className = 'one8b-local-status'; status.setAttribute('role', 'status'); status.id = 'one8b-backup-status';
    const busy = value => { exportButton.disabled = importButton.disabled = value; if (value) status.textContent = m[4]; };
    exportButton.addEventListener('click', async () => {
      busy(true);
      try { downloadBlob(await exportBackup(), '1in8b-backup-' + new Date().toISOString().slice(0, 10) + '.json'); status.textContent = m[5]; }
      catch (error) { console.error('Local backup export:', error); status.textContent = m[7]; }
      finally { busy(false); }
    });
    importButton.addEventListener('click', () => input.click());
    input.addEventListener('change', async () => {
      const file = input.files[0];
      if (!file) return;
      busy(true);
      try { const result = await importBackup(file); status.textContent = m[6] + ' (' + result.imported + ' / ' + result.skipped + ')'; reload.hidden = false; }
      catch (error) { console.error('Local backup import:', error); status.textContent = m[7]; }
      finally { busy(false); input.value = ''; }
    });
    reload.addEventListener('click', () => location.reload());
    bar.append(home, exportButton, importButton, reload, input, note, status);
    document.body.prepend(bar);
    storage.setItem('local-language', locale);
    return bar;
  }
  window.One8bLocal = Object.freeze({ namespace, storage, ready, get, put, remove, list, registerDatabase, exportBackup, importBackup, downloadBlob, mountToolbar, text, get isImporting() { return importing; }, get isExporting() { return exporting; }, get needsReload() { return needsReload; } });
})();
