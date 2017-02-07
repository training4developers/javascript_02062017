'use strict';

const nums = [ 1, 2, 3, 4, 5 ];

const result = nums.reduce(function(state, action) {
    
    console.log('state: ' + state);
    console.log('action: ' + action);
    
    return state + action;
}, 0);

console.log(result);