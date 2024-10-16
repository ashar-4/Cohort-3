
// Function declaration
function sum(a, b) {
    let totalSum = a + b;
    return totalSum;
}

let ans1 = sum("ashar", 2);
let ans2 = sum(3, 4);

console.log(ans1);
console.log(ans2);



function canVote(age) {
    return age > 18;
}

let ages = [5, 18, 25];

console.log(canVote(ages[0]));
console.log(canVote(ages[1]));
console.log(canVote(ages[2]));

function checkEvenOdd(x) {
    if (x % 2)
        console.log("Odd");
    else
        console.log("Even");
}

checkEvenOdd(5);
checkEvenOdd(8);


function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i;
    return sum;
}

let sum1 = findSum(5);
console.log(sum1);


let sum2 = findSum(10);
console.log(sum2);




function greetUser(user) {
    console.log("Hello " + user.name + ", your age is " + user.age);
}

let user1 = {
    name: "ashar",
    age: 27
};

greetUser(user1);



function greetWithGender(user) {
    if (user.gender == "male")
        console.log("Hi Mr " + user.name + ", your age is " + user.age);
    else if (user.gender == "female")
        console.log("Hi Mrs " + user.name + ", your age is " + user.age);
    else
        console.log("Hi Others " + user.name + ", your age is " + user.age);
    if (canVote(user.age))
        console.log("You are allowed to vote.")
    else
        console.log("You are NOT allowed to vote");
}


let user2 = {
    name: "aadya",
    age: 18,
    gender: "female"
}

greetWithGender(user2);


function evenNumbers(num) {
    return num%2==0;
}

let arr1 = [1, 2, 3, 4, 5];
let filteredArray = arr1.filter(evenNumbers);

for (let i = 0; i < filteredArray.length; i++)
    console.log(filteredArray[i]);



function filterUser(user) {
    return canVote(user.age);
}

let users = [
    {
        name: "ashar",
        age: 27,
        gender: "male"
    },
    {
        name: "aadya",
        age: 18,
        gender: "female"
    },
    {
        name: "lps",
        age: 72,
        gender: "male"
    }
]

function printUser(user) {
    console.log(user.name + " " + user.age + " " + user.gender);
}

let votingUsers = users.filter(filterUser);

for (let i = 0; i < votingUsers.length; i++)
    printUser(votingUsers[i]);