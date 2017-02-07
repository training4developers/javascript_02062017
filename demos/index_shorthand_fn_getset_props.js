'use strict';

var p = {

    _firstName: 'Bob',
    _lastName: 'Smith',

    get firstName() {
        console.log('called get firstName');
        return this._firstName;
    },

    set firstName(value) {
        console.log('called set firstName');
        this._firstName = value;
    },

    // Object.defineProperty(p, 'firstName', {
    //     configurable: true,
    //     enumerable: true,
    //     get: function() {
    //         console.log('called get firstName');
    //         return this._firstName;
    //     },
    //     set: function(value) {
    //         console.log('called set firstName');
    //         this._firstName = value;
    //     }
    // });    

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },

    // getFullName: function() {
    //     return this.firstName + ' ' + this.lastName;
    // },

};

//p.age = 22;
Object.defineProperty(p, 'age', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 22,
});



p.firstName = 'John';
console.log(p.firstName);







