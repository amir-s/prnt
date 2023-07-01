# PRNT

It's a `console.log`, but it passes all arguments through `JSON.stringify`.

## Install

`npm install prnt --save`

## Usage

```js
const prnt = require("prnt");

prnt("Test", 3.14);
prnt({ name: "Amir", username: "amir-s" });
```

## License

MIT
