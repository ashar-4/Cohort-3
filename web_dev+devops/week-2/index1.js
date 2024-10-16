/*
function sum1(a, b) {
	return a + b;
}

let ans1 = sum1(20, 30);
console.log(ans1);


function sum2(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i;
	}
	return ans;
}

const ans2 = sum2(100);
console.log(ans2);
*/

// const fs = require("fs");

// // const dataA = fs.readFileSync("a.txt", "utf-8");
// // console.log(dataA);

// // const dataB = fs.readFileSync("b.txt", "utf-8");
// // console.log(dataB);

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// })

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// })

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// })

function timeout() {
	console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to Wakanda!");

let c = 0;
for (let i = 0; i < 1000000000; i++) {
	c = c + 1;
} 

console.log("Expensive operation done");