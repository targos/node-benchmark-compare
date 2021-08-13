#!/usr/bin/env node

import { readFileSync } from 'fs';

import { analyseCsv } from '../src/node-benchmark-compare.js';

if (process.argv.length !== 3) {
  console.error('usage: node-benchmark-compare result.csv');
  process.exit(1);
}

const contents = readFileSync(process.argv[2], 'utf8');
const result = analyseCsv(contents);

console.log(result);
