const add = function(x, y) {
  return x + y;
}

const foo = x => x - 15;

const reverse = function(arr) {
  console.log('helper');
  return arr.reverse(arr);
}

module.exports = {
  add,
  foo,
  reverse,
};