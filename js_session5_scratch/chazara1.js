// Function - basic

function HelloWorld(name) {
    console.log(`Hello ${name}`);
}

HelloWorld('Israel');


// Callback

function power(number) {
    return number * number
}

function sumAndPower(numOne, numTwo, makePower) {
    let result = numOne + numTwo;
    let resultPower = makePower(result)
    return resultPower;
}

