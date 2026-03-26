const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('frontend placeholder page exists', () => {
  const content = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf8');
  assert.match(content, /EasySwitch Prototype/);
});
