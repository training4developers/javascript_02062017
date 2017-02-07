'use strict';

function getFilterFn() {

    return function(num, index, originalNums) {

        console.log(index);
        console.log(originalNums);

        return num % 2 === 0;

    };

}

function doIt() {

    const nums = [1,2,3,4,5,6,7];

    const filteredNums = nums.filter(getFilterFn());

    console.log(nums);
    console.log(filteredNums);
    console.log(nums === filteredNums);

}

doIt();