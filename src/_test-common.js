import { readFileSync } from 'fs';

export function loadFixture(name) {
  return readFileSync(new URL(`../fixtures/${name}`, import.meta.url), 'utf8');
}
