// map, filter, arrow functions

// function sum(a, b) {
//     return a + b;
// }

const sum = (a, b) => {
    return a + b;
}

const ans = sum(1, 2);
console.log(ans);





// given an array, give me back a new array in which every value is multiplied by 2
// input = [1, 2, 3, 4, 5]
// output = [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

function t (a) {
    return 2 * a;
}

const newArray = input.map(t);
console.log(newArray);







// given an input array, give me back all the even values from it
const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.filter((i) => {
    return i%2==0;
})

console.log(newArr);