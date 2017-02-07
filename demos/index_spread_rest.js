'use strict';

function doIt(a,b,c, ...d) {
    console.log(a,b,c,d);
}


//doIt.apply(null, [1,2,3,4,5]);
doIt(...[1,2,3,4,5]);

const [first, second, ...allTheRest] = [1,2,3,4,5];

console.log(first, second, allTheRest);

const colors = ['red','green','blue'];
// const newColors = colors.concat('yellow');
const newColors = [ 'purple', ...colors, 'yellow' ];
console.log(newColors);
