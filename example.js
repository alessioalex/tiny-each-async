/* eslint-disable no-console, func-names */
'use strict';

var eachAsync = require('./');
var timeouts = [300, 100, 2000];

eachAsync(['file1', 'file2', 'file3'], function(item, index, next) {
  setTimeout(function() {
    console.log(item, index, timeouts[index]);
    next();
  }, timeouts[index]);
}, function(err) {
  return err ? console.error(err.stack) : console.log('all done');
});
