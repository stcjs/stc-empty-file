# stc-empty-file

Stc plugin for check empty file

## Install

```sh
npm install stc-empty-file
```

## How to use

```
var emptyfile = require('stc-empty-file');

//check empty file
stc.lint({
  emptyfile: {plugin: emptyfile, include: /\.*$/}
});
```
