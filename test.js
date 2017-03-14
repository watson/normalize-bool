'use strict'

var test = require('tape')
var bool = require('./')

test('false', function (t) {
  t.equal(bool(), false)
  t.equal(bool(null), false)
  t.equal(bool(undefined), false)
  t.equal(bool(NaN), false)
  t.equal(bool(0), false)
  t.equal(bool(false), false)
  t.equal(bool(''), false)
  t.equal(bool('0'), false)
  t.equal(bool('false'), false)
  t.equal(bool('no'), false)
  t.equal(bool('off'), false)
  t.equal(bool('disabled'), false)
  t.end()
})

test('true', function (t) {
  t.equal(bool(1), true)
  t.equal(bool(true), true)
  t.equal(bool('1'), true)
  t.equal(bool('true'), true)
  t.equal(bool('yes'), true)
  t.equal(bool('on'), true)
  t.equal(bool('enabled'), true)
  t.equal(bool('some random string'), true)
  t.equal(bool({}), true)
  t.equal(bool([]), true)
  t.end()
})
