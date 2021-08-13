import * as tap from 'tap';

import { loadFixture } from './_test-common.js';
import { analyseCsv } from './node-benchmark-compare.js';

function analyseFixture(name) {
  return analyseCsv(loadFixture(name));
}

tap.test('path-dirname-posix', (t) => {
  t.plan(1);
  t.matchSnapshot(analyseFixture('path-dirname-posix.csv'));
});

tap.test('http', (t) => {
  t.plan(1);
  t.matchSnapshot(analyseFixture('http.csv'));
});
