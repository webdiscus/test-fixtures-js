/*!
 * Test fixture - JS module with dependency (https://github.com/webdiscus/test-fixtures-js)
 * Copyleft 2022 @test-fixtures/js
 * Licensed under ISC (https://github.com/webdiscus/test-fixtures-js/blob/master/LICENSE)
 */

const lorem = require('@test-fixtures/lorem');
const libA = require('./lib-a');
const libB = require('./lib-b');

console.log('Fixture script');

module.exports = { lorem, libA, libB };
