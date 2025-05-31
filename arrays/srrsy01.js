const arr = [1 , 5, 10, 'olá', true];

let sohNummeros = arr.every(function(el){
    return typeof el === 'number'
})

console.log(sohNummeros)


sohNummeros = arr.some(function(el){
    return typeof el === 'number'
})

console.log(sohNummeros)

const arr1 = arr.filter(function(el, i, _arr){
    return typeof el === 'number'
})

console.log(arr)
console.log(arr1)