import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import reverse from '../src/index.js';



const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse with log text', () => {
  const text = readFile('longHTMLText').trim();
  const result = readFile('reversedHTMLText').trim();

  expect(reverse(text)).toEqual(result);
});


