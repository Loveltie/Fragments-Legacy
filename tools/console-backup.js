// Paste into the DevTools console of the Fragments popup (right click popup, Inspect, Console).
// Downloads every word (with FSRS state) plus settings as one JSON file. Read only.
(async () => {
  const db = await new Promise((res, rej) => { const r = indexedDB.open('fragments-db'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  const words = await new Promise((res, rej) => { const r = db.transaction('words').objectStore('words').getAll(); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  const settings = await chrome.storage.local.get(null);
  const backup = { app: 'fragments', backupVersion: 1, exportedAt: new Date().toISOString(), extensionId: chrome.runtime.id, settings, words };
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }));
  a.download = `fragments-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  console.log(`Backed up ${words.length} words`);
})();
