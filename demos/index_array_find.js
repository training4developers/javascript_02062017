'use strict';

const nums = [ 1, 2, 3, 4, 5 ];

// console.log(nums.find(function(num, index) {

//     console.log(index);

//     return num == 3;

// }));

console.log(nums.findIndex(function(num, index) {

    //console.log(index);

    return num == 3;

}));

// console.log(nums.filter(function(num, index) {

//     console.log(index);

//     return num == 3;

// }));

console.log(nums.includes(2));

