/* eslint-disable func-names */
'use strict';

var async = require('async');
var eachAsync = require('../');

var CORES = require('os').cpus().length;
var ITERATIONS = CORES * 1000;
var DELAY = 200;

suite('asynchronous .eachSeries() modules', function() {
  // the number of times to run a given bench
  set('iterations', ITERATIONS);
  // the number of how many times a given bench is run concurrently
  set('concurrency', CORES);
  // time in ms between each bench
  set('delay', DELAY);

  var items = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6'];

  bench('eachAsync()', function(cb) {
    eachAsync(items, 1, function(item, next) {
      setImmediate(next);
    }, cb);
  });

  bench('async.eachSeries()', function(cb) {
    async.eachSeries(items, function(item, next) {
      setImmediate(next);
    }, cb);
  });
});
