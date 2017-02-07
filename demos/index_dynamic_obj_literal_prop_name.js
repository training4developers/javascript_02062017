'use strict';

const fnPropName = 'firstName'; 
const fn = 'Bob';

var p = {
    [fnPropName]: 'Bob'
};

onChange(e) {

    this.setState({
        [e.currentTarget.name]: e.currentTarget.value
    });

    // the above is an improvement over this
    // const newState = {};
    // newState[e.currentTarget.name] = e.currentTarget.value
    // this.setState(newState);

}

console.log(p.firstName);









