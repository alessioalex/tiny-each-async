# tiny-async-each

Asynchronous iterator function, similar to (and inspired by) [async.each](https://github.com/caolan/async#eacharr-iterator-callback).

[![build status](https://secure.travis-ci.org/alessioalex/tiny-async-each.png)](http://travis-ci.org/alessioalex/tiny-async-each)

## Usage

### each(array, iterator, [callback])

Arguments:

- array - An array of items to iterate through.
- iterator(item, [index], callback) - A function to be applied to each item in the array. When it has finished processing the item then the `callback` function should be called (in case of a failure with the `error` argument, otherwise none).
- callback(err) - An optional callback function that gets called when either all `iterator` functions have finished or one of them has returned an error.

### Example

```js
var eachAsync = require('tiny-each-async');
var timeouts = [300, 100, 2000];

eachAsync(['file1', 'file2', 'file3'], function(item, index, next) {
  setTimeout(function() {
    console.log(item, index, timeouts[index]);
    next();
  }, timeouts[index]);
}, function(err) {
  return err ? console.error(err.stack) : console.log('all done');
});
```

## FAQ

- Why the name?

Other possible names were already taken, and the actual source code is tiny.

- Why create another async library?

Because doing your own thing is fun.

## License

[MIT](http://alessioalex.mit-license.org/)
