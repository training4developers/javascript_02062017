

const youngMan = new Promise(function youngLady(resolve, reject) {
    setTimeout(function() {
        resolve('she is super happy!');
    }, 2000);
    //throw Error('she is not happy...');
});

youngMan.then(function(results) {
    console.log(results);
    console.log('yay! she said yes!');

    console.log('look for a place to get married...');
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('found a place!');
        }, 2000);
    });

}).then(function(results) {

    console.log(results);
    console.log('continue get ready!');

}).catch(function(results) {
    console.log(results);
    console.log('sign up for eHarmony');
});

console.log('young man waiting');


