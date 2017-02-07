'use strict';

const colors = ['red','white','blue','green','saffron'];
let newColors = colors;

// console.log(colors.length);
// mutate the array
// colors.push('gold');
// colors.pop();
// colors.unshift('gold');
// colors.shift();
// colors.splice(indexToStart, length, newItems)

// produce new array, not mutate the original
newColors = colors.concat('gold');
newColors = newColors.slice(1);

colors.concat().sort();
console.log(colors);

//console.log(colors.length);
//console.log(newColors.length);
//console.log(newColors === colors);
