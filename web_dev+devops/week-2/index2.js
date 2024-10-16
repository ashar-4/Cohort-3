// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area() {
//         const area = this.width * this.height;
//         return area;
//     }
//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }
// }

// const rect = new Rectangle(3, 5, "red");
// const area = rect.area();
// console.log(area);
// rect.paint();

// const now = new Date();
// console.log(now.toISOString());

// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);


// function random(resolve) {
//     // resolve();
//     setTimeout(resolve, 3000);
// }

// let p = new Promise(random);

// // console.log(p);

// function callback() {
//     console.log("Promise succeeded");
// }

// p.then(callback);


function print(content) {
    console.log(content);
}

setTimeout(print, 1000, "hi");

setTimeout(print, 4000, "hello");

setTimeout(print, 9000, "hello there");