/* eslint-disable no-console, func-names */
'use strict';

var it = require('tape');
var eachAsync = require('./');

it('should execute the final callback once all individual tasks are finished', function(t) {
  var counter = 0;

  eachAsync([1, 2, 3], function(item, next) {
    counter++;
    next();
  }, function() {
    t.equal(counter, 3);
    t.end();
  });
});

it('should be async even though the iterator is not', function(t) {
  var index = 0;

  eachAsync([1, 2, 3], function(item, i, next) {
    next();
  }, function() {
    t.equal(++index, 2);
    t.end();
  });

  t.equal(++index, 1);
});

it('should provide index as an argument for the iterator if needed', function(t) {
  var items = [11, 22, 33];

  eachAsync(items, function(item, i, next) {
    t.equal(item, items[i]);

    next();
  }, function() {
    t.end();
  });
});

it('should treat iterator index as an optional param', function(t) {
  eachAsync([1, 2, 3], function(item, next) {
    next();
  }, function() {
    t.end();
  });
});

it('should return early in case there\'s an error', function(t) {
  var error = new Error('test');

  eachAsync([1, 2, 3], function(item, next) {
    if (item === 2) { return next(error); }

    next();
  }, function(err) {
    t.equal(err, error);
    t.end();
  });
});
