# normalize-bool

Converts strings representing an on/off-state to booleans. Falsy values
and a whitelist of keywords are converted to the boolean `false`.
Everything else is considered `true`.

Useful for normalizing environment variables and other user-input to
booleans.

[![Build status](https://travis-ci.org/watson/normalize-bool.svg?branch=master)](https://travis-ci.org/watson/normalize-bool)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install normalize-bool --save
```

## Usage

```js
var bool = require('normalize-bool')

console.log(bool('no')) // => false
console.log(bool('yes')) // => true
```

## API

### `var bool = normalizeBool(value)`

Converts the input value to a boolean. Falsy values and a whitelist of
keywords are converted to the boolean `false`. Everything else is
considered `true`.

The following values are considered `false`:

- All normal [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- `'0'`
- `'false'`
- `'no'`
- `'off'`
- `'disabled'`

## License

MIT
