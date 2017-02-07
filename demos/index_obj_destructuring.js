'use strict';

// creating an object literal, right side of the assignment
const p = {
    firstName: 'Bob',
    lastName: 'Smith'
};

// doing destructuring, left side of the assignment
const { firstName: fn, lastName: ln } = p;

console.log(fn);
console.log(ln);

function printName({ firstName, lastName }) {
    console.log(firstName + ' ' + lastName);
}

printName({ firstName: 'Jim', lastName: 'Jones' });
