[![npm](https://img.shields.io/npm/v/@test-fixtures/js?logo=npm&color=brightgreen "npm package")](https://www.npmjs.com/package/@test-fixtures/js "download npm package")
[![node](https://img.shields.io/npm/dm/@test-fixtures/js)](https://www.npmjs.com/package/@test-fixtures/js)


# @test-fixtures/js

JS test fixture module for testing a module with dependency.

## Install

```
npm i -D @test-fixtures/js
```

## Usage

```js
const { lorem, libA, libB } = require('@test-fixtures/js');

console.log('Lorem: ', lorem.getTitle()); // Lorem Ipsum
console.log('Lib 1: ', libA.getName());   // Lib A
console.log('Lib 2: ', libB.getName());   // Lib B
```
