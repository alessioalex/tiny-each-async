/* eslint-disable no-console, func-names */
'use strict';

var eachAsync = require('../');

// doStuff will be called for 3 items at a time
// similar to async.eachLimit
eachAsync(['file1', 'file2', 'file3', 'file4', 'file5'], 3, function doStuff(item, next) {
  setTimeout(function() {
    console.log(item);
    next();
  }, 2000);
}, function(err) {
  return err ? console.error(err.stack) : console.log('all done');
});

/*

After 2 seconds the output will be the following:

file1
file2
file3

After another 2 seconds the following will be displayed:

file4
file5

*/
