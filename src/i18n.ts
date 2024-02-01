/**
 * (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 *
 * SPDX-License-Identifier: MIT
 */

import { init, locale, register } from 'svelte-i18n';
export { t } from 'svelte-i18n';
import { get } from 'svelte/store';
import { persistantWritable } from './script/stores/storeUtil';
import browserLang from 'browser-lang';

register('en', () => import('./messages/en.json'));
register('da', () => import('./messages/da.json'));
register('de', () => import('./messages/de.json'));

const initialLocale = browserLang({
  languages: ['en', 'da', 'de'],
  fallback: 'de',
});

const persistantLocale = persistantWritable('lang', initialLocale);

locale.subscribe(newLocal => {
  if (newLocal) {
    persistantLocale.set(newLocal);
  }
});

await init({
  fallbackLocale: 'de',
  initialLocale: get(persistantLocale),
});
