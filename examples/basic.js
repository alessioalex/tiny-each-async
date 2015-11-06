/* eslint-disable no-console, func-names */
'use strict';

var eachAsync = require('../');

eachAsync(['file1', 'file2', 'file3'], function(item, next) {
  setTimeout(function() {
    console.log(item);
    next();
  }, 200);
}, function(err) {
  return err ? console.error(err.stack) : console.log('all done');
});
