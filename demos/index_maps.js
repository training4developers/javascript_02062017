'use strict';

const m = new Map();
m.set('dileep', 'A');
m.set('scott', 'B');
m.set('juan', 'C');
m.set('karen', 'A++');

console.log(m.has('dileep'));
console.log(m.has('neelima'));

console.log(m.get('karen'));

console.log(m.entries());
console.log(m.keys());
console.log(m.values());

//m.clear();

//console.log(m.has('dileep'));

const upperCaseKeys = Array.from(m.keys()).map(function(key) {
    return String(key).toUpperCase();
});

console.log(upperCaseKeys);
