'use strict';

const poorParent = {
    amt: 2000
};

const child = Object.create(poorParent);

const richParent = {
    amt: 20000
};

console.log(child.amt);
Object.setPrototypeOf(child, richParent);

child.amt = 10;

console.log(child.amt);
console.log(richParent.amt);


