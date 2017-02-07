'use strict';

const nums = [1,2,3,4,5,6,7];

const multiNums = nums.filter(function(num) { return num > 3; }).map(function(num, index, originalNums) {

    return num * 2;

});

console.log(nums);
console.log(multiNums);