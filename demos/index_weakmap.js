'use strict';

const p = {
    firstName: 'Bob',
    lastName: 'Smith'
};

Object.freeze(p);

const extraProps = new WeakMap();

extraProps.set(p, {
    age: 22
});

console.log(extraProps.get(p).age);

