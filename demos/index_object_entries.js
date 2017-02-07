'use strict';

const parent = {
    parentProp: 'some value'
};

const child = Object.create(parent);
child.childProp = 'some value 2';

console.log(child.parentProp);
parent.parentProp = 'a new value';
console.log(child.parentProp);

// iterating over object props and values
console.log(Object.entries(child));
console.log(Object.keys(child));
console.log(Object.values(child));

// for (let prop in child) {

//     if (child.hasOwnProperty(prop)) {
//         console.log(prop);
//     }
// }