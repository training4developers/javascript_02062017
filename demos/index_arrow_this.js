'use strict';

const doIt = () => { };

class Person {
    getFullName() {
        
    }
}


function outer() {

    console.log(this);

    // const inner = () => {
    //     console.log(this);
    // };

    // inner();

    setTimeout(() => {
        console.log(this);
    }, 2000);
}

var o = {
    id: 3,
    outer: outer
};
o.outer();