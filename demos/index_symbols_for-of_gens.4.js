
const colors = {

    _items: [ 'red', 'blue', 'yellow' ],

    add: color => colors._items.push(color),

};

colors[Symbol.iterator] = function* () {

    for (let c=0; c<colors._items.length; c++) {
        console.log(c);
        yield colors._items[c];
    }
};

colors.add('green');

console.log(colors);

for (let color of colors) {
    console.log('for-of iterated');
    console.log(color);
}

