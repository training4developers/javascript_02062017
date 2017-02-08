

function outer() {

    let t = 5;

    setTimeout(function() {
        t = 10;
    }, 2000);

    function inner() {
        console.log(t);
    }

    return inner;
}

const fn = outer();
fn();

setTimeout(function() {
    fn();
}, 1000);
