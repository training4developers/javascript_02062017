'use strict';

//const [ first, second ] = [ 2, 3 ];

//console.log(first);
//console.log(second);

// let x = 2;
// let y = 3;

// let temp = x;
// x = y;
// y = temp;

// [y,x] = [x,y];

// console.log(x);
// console.log(y);

var p = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 23
};

console.log(Object.entries(p));

Object.entries(p).forEach(([ key, value ]) => console.log(key, value));
