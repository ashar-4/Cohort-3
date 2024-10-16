function filterUsersNewArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["age"] > 18 && arr[i]["gender"] == "male")
            result.push(arr[i]);
    }
    return result;
}

function check(user) {
    return user["age"] > 18 && user["gender"]=="male";
}

function filterUsersUsingFilter(arr) {
    return arr.filter(check);
}

let users = [
    {
        name: "Ashish",
        age: 28,
        gender: "male"
    },
    {
        name: "aadya",
        age: 28,
        gender: "female"
    },
    {
        name: "lps",
        age: 72,
        gender: "male"
    }
];

console.log(filterUsersNewArray(users));
console.log(filterUsersUsingFilter(users));
