/* eslint-disable no-console, func-names */
'use strict';

var eachAsync = require('../');
var timeouts = [700, 300, 2000];

// call doStuff function one at a time and wait for it to finish
// before running it for the next item in the array
// similar to async.eachSeries
eachAsync(['file1', 'file2', 'file3'], 1, function doStuff(item, index, next) {
  setTimeout(function() {
    console.log(item, index, timeouts[index]);
    next();
  }, timeouts[index]);
}, function(err) {
  return err ? console.error(err.stack) : console.log('all done');
});
