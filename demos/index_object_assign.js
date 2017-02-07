'use strict';

const src = {
    firstName: 'Bob',
    lastName: 'Smith',
    address: {
        street: '123 Oak Lane'
    },
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
    age: 21,
};

const src2 = {
    age: 34,
};

const dest = {
    firstName: 'Jim'
};

Object.assign(dest, src, src2);

console.log(dest);
console.log(dest.getFullName === src.getFullName);