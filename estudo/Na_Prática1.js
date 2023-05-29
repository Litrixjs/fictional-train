const maca = {
    valor: 2,
}

const laranja = {
    valor: 3,
}

function mapComThis( ar, thisArg) {
    return ar.map(function(item){
        return item * this.valor;
    }, thisArg);
}

const nums = [1, 2];

console.log('This -> maçã', mapComThis(nums, maca));

console.log('This -> laranja', mapComThis(nums, laranja));