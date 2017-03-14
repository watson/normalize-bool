'use strict'

module.exports = function normalizeBool (bool) {
  if (!bool) return false
  switch (bool.toString().toLowerCase()) {
    case '0':
    case 'false':
    case 'no':
    case 'off':
    case 'disabled':
      return false
    default:
      return true
  }
}
