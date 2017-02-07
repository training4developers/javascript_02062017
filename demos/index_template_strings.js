'use strict';

const message = 'World';
const descriptor = 'fun';

function tagged() {
    console.log(arguments);
    return arguments[0];
}

const t = Relay.QL`Hello ${message.toUpperCase()} This is ${descriptor}`;

console.log(t);
