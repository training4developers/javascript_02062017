//require('babel-core/register');
require('babel-polyfill');

// const items = new Map();

// items.set(1,'item 1');
// items.set(2,'item 2');
// items.set(3,'item 3');

// for (let itemKey of items.keys()) {
//     console.log(itemKey);
// }

// function* getValues() {

//     yield 1;
//     yield 2;
//     yield 3;
// }


// for (let val of getValues()) {

//     console.log(val);

// }

// const y = getValues();
// console.log(y.next().value);
// console.log(y.next().value);
// console.log(y.next().value);

function wait() {

    return new Promise(resolve => setTimeout(() => resolve('a'), 2000));

}


async function doIt() {

    console.log('started');
    await wait();
    console.log('done');

}

doIt();