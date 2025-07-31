/* jshint esversion: 6 */

export function initLocalStorageSync() {
  const EDITABLE_CLASS = 'editable-block';
  const STORAGE_KEY = 'resumeEditableData';

  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  document.querySelectorAll(`.${EDITABLE_CLASS}`).forEach((el, index) => {
    const id = el.dataset.storageKey || `editable-${index}`;

    el.dataset.storageKey = id;

    if (savedData[id]) {
      el.innerHTML = savedData[id];
    }

    el.addEventListener('input', () => {
      savedData[id] = el.innerHTML;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    });
  });
}
