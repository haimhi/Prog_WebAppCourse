let obj = {
    username: "rahamim",
    password: "lkajdsf",
    age: 32
}

console.log(obj);

// stringify
let jsonObj = JSON.stringify(obj);
console.log(jsonObj);

// parse
let jsonObj1 = '{ "username": "rahamim","password":"lkajdsf","age": 32}'
let jsJsonObj = JSON.parse(jsonObj1);

console.log(jsJsonObj);