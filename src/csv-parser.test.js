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

tap.test('parseCsv() should handle correctly big csv', (t) => {
  t.plan(2);
  const csv = loadFixture('big.csv');
  const data = parseCsv(csv);
  t.equal(data.length, csv.trim().split('\n').length);
  t.strictSame(
    data.map((line) => line.length),
    Array(data.length).fill(5),
  );
});

tap.test('parseCsv() should ignore empty or whitespaces lines', (t) => {
  t.plan(1);
  t.strictSame(parseCsv('1,2,3\n   \n\t\n1,2,3'), [
    [1, 2, 3],
    [1, 2, 3],
  ]);
});

tap.test('parseCsvLine() should handle correctly invalid numbers', (t) => {
  t.plan(1);
  t.strictSame(parseCsvLine('"a",b,c,-0-'), ['a', NaN, NaN, NaN]);
});

tap.test('parseCsvLine() should remove useless whitespaces', (t) => {
  t.plan(2);
  t.strictSame(parseCsvLine('     "a"   ,\t.110,11\t'), ['a', 0.11, 11]);
  t.strictSame(parseCsvLine('\t   \t  '), []);
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
