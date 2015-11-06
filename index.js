'use strict';

// we don't need a real shim setImmediate
var immediate = (typeof setImmediate === 'function') ? setImmediate : setTimeout;

module.exports = function eachAsync(arr, iterator, cb) {
  var callback = cb || function noop() {};
  var counter = arr.length;
  var iteratorLength = iterator.length;
  var error;

  arr.forEach(function forEach(item, index) {
    var next = function next(err) {
      if (!error && (err || !--counter)) {
        error = err;

        immediate(function asyncify() {
          callback(err);
        }, 0);
      }
    };

    var args = (iteratorLength === 2) ? [item, next] : [item, index, next];

    iterator.apply(null, args);
  });
};
