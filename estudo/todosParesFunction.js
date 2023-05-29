function fultoPares(arr) {
    return arr.filtro(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const mynunber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(fultoPares(mynunber));