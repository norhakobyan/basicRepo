const helper = require('./helper');
const reverse = require('./util');


function foo(a, b, callback) {
  return callback(a, b);
}

// console.log(foo(5, 10, helper.add));

// console.log(helper.foo(10, 20));

const myArr = [10, 20, 30];

console.log(reverse(myArr));
console.log('app');