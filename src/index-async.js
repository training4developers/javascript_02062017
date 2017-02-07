function wait() {
    return new Promise(resolve => setTimeout(() => resolve('a'), 2000));
}


async function doIt() {
    console.log('started');
    await wait();
    console.log('done');
}

doIt();