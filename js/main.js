/* jshint esversion: 6 */

import { initRipples } from './ripple.js';
import { initDownload } from './download.js';
import { initLocalStorageSync } from './storage.js';

function initLanguageProgressBars() {
  document.querySelectorAll('.language__progress').forEach((el, index) => {
    const defaultLevel = el.getAttribute('data-level') || 100;
    const level = index === 2 ? 80 : defaultLevel;
    el.setAttribute('data-level', level);
    el.style.width = `${level}%`;

    const input = el.parentElement.querySelector('.language__range');
    if (input) {
      input.value = level;
    }
  });

  document.querySelectorAll('.language__range').forEach((input) => {
    input.addEventListener('input', () => {
      const progress = input.parentElement.querySelector('.language__progress');
      const val = input.value;
      progress.setAttribute('data-level', val);
      progress.style.width = `${val}%`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageProgressBars();

  window.requestIdleCallback(() => {
    initLocalStorageSync();
    initRipples();
    initDownload();
  });
});
