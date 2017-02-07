'use strict';

const doIt = x => x ** 2;

console.log(doIt(4));

//console.log([1,2,3,4].map(function (x) { return x ** 2; }));
console.log([1,2,3,4].map(x => x ** 2));

console.log(typeof class { });