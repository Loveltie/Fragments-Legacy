// Paste into the DevTools console of the Fragments popup, then pick the backup JSON file.
// Writes every word back with its original id (put = insert or overwrite), then restores settings.
(async () => {
  const input = Object.assign(document.createElement('input'), { type: 'file', accept: '.json' });
  input.onchange = async () => {
    const backup = JSON.parse(await input.files[0].text());
    if (backup.app !== 'fragments') throw new Error('Not a Fragments backup');
    const db = await new Promise((res, rej) => {
      const r = indexedDB.open('fragments-db', 1);
      r.onupgradeneeded = () => {
        const s = r.result.createObjectStore('words', { keyPath: 'id', autoIncrement: true });
        s.createIndex('word', 'word');
        s.createIndex('createdAt', 'createdAt');
      };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    await new Promise((res, rej) => {
      const tx = db.transaction('words', 'readwrite');
      backup.words.forEach(w => tx.objectStore('words').put(w));
      tx.oncomplete = res;
      tx.onerror = () => rej(tx.error);
    });
    await chrome.storage.local.set(backup.settings);
    const count = await new Promise(r => { const q = db.transaction('words').objectStore('words').count(); q.onsuccess = () => r(q.result); });
    console.log(`Restored ${backup.words.length} words. Database now holds ${count}. Close and reopen the popup.`);
  };
  input.click();
})();
