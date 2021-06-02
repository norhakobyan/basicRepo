const add = require('./helper');


function foo(a, b, callback) {
  return callback(a, b);
}

console.log(foo(5, 10, add));