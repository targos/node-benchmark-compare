import * as tap from 'tap';

import { loadFixture } from './_test-common.js';
import { parseCsv, parseCsvLine } from './csv-parser.js';

function processFixture(name) {
  return JSON.stringify(parseCsv(loadFixture(name)));
}

tap.test('path-dirname-posix', (t) => {
  t.plan(1);
  t.matchSnapshot(processFixture('path-dirname-posix.csv'));
});

tap.test('http', (t) => {
  t.plan(1);
  t.matchSnapshot(processFixture('http.csv'));
});

tap.test('http-bis', (t) => {
  t.plan(1);
  t.matchSnapshot(processFixture('http-bis.csv'));
});

tap.test('complex', (t) => {
  t.plan(1);
  t.matchSnapshot(processFixture('complex.csv'));
});

tap.test('big', (t) => {
  t.plan(1);
  t.matchSnapshot(processFixture('big.csv'));
});

tap.test('parseCsvLine() should handle correctly invalid numbers', (t) => {
  t.plan(1);
  t.strictSame(parseCsvLine('"a",b,c,-0-'), ['a', NaN, NaN, NaN]);
});

tap.test('parseCsvLine() should remove useless whitespaces', (t) => {
  t.plan(1);
  t.strictSame(parseCsvLine('     "a"   ,\t.110,11\t'), ['a', 0.11, 11]);
});

tap.test("parseCsvLine() should keep data's whitespaces", (t) => {
  t.plan(1);
  t.strictSame(parseCsvLine('"a\\na","\t      10\t","\t11     "'), [
    'a\\na',
    '\t      10\t',
    '\t11     ',
  ]);
});

tap.test('parseCsvLine() should ignore commas inside quotes', (t) => {
  t.plan(1);
  t.strictSame(parseCsvLine('"a,b,c,c",1,"d,d,d   ,d","c,d,d\\,test"'), [
    'a,b,c,c',
    1,
    'd,d,d   ,d',
    'c,d,d\\,test',
  ]);
});
