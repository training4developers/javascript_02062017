
function wait() {
    return new Promise(resolve => setTimeout(() => resolve('a'), 2000));
}


async function doIt() {
    console.log('started');
    //throw Error('test');
    let result = await wait();
    console.log(result);
    console.log('done');
}

try {

    doIt();
    console.log('all done');

} catch(err) {
    console.log('caught the error');
}