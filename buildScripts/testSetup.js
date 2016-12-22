// This file isn't transpiled, so must use CommonJS and ES5

// Register Babel to transpile before our tests run.
require('babel-register')();

// Disable webpack feature that mocha does not understand
require.extensions['.css'] = function () { };
