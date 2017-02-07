'use strict';

const s = new Set();

s.add(1);
s.add(2);

console.log(s.has(2));

s.delete(1);
console.log(s.has(1));
