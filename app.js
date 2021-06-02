const helper = require('./helper');


function foo(a, b, callback) {
  return callback(a, b);
}

console.log(foo(5, 10, helper.add));

console.log(helper.foo(10, 20));