# PRNT

I found myself using this function a lot for printing stuff in javascript.

It is like `console.log`, but it passes everything through `JSON.parse`.

## Install
`npm install prnt --save`

## Usage

```js
const prnt = require('prnt');

prnt("Test", 3.14)
prnt({name: 'Amir', username: 'amir-s'});
```
## License

  MIT
