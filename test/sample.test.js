const test = require('ava')
const awesomeModule = require('../src/sample')

test('Works nicely together', (t) => {
  t.is(awesomeModule(), 84)
})