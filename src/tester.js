let arr = require('./transform-array.js')

console.log(arr(['--discard-prev', 1, 2, 3]));
console.log(arr([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
// console.log(arr([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
// console.log(arr([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));

