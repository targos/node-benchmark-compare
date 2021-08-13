import { readFileSync } from 'fs';

import * as tap from 'tap';

import { analyseCsv } from './node-benchmark-compare.js';

function loadFixture(name) {
  return readFileSync(new URL(`../fixtures/${name}`, import.meta.url), 'utf8');
}

function analyseFixture(name) {
  return analyseCsv(loadFixture(name));
}

tap.test('path-dirname-posix', (t) => {
  t.plan(1);
  t.matchSnapshot(analyseFixture('path-dirname-posix.csv'));
});
