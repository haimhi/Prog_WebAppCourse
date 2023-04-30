// // Function - basic

// function HelloWorld(name) {
//     console.log(`Hello ${name}`);
// }

// HelloWorld('Israel');


// // Callback

// function power(number) {
//     return number * number
// }

// function sumAndPower(numOne, numTwo, makePower) {
//     let result = numOne + numTwo;
//     let resultPower = makePower(result)
//     return resultPower;
// }

// let resultSumandPower = sumAndPower(2, 2, power);
// console.log(resultSumandPower);

// function sumAndMore(num1, num2, more)    {
//     let result = num1 + num2;
//     let resultPower = more(result)
//     return resultPower;
// }

// let result = sumAndMore(4, 5, (a) => { return a + 5 })
// console.log(result);


// // Using APIs

// let getJoke = async () => {
//     let response = await fetch('https://api.chucknorris.io/jokes/random')
//     let data = await response.json()
//     console.log(data.value);
// }

// getJoke();


// Arrays

let arrGrade = [100, 97, 90]
arrGrade[0];
arrGrade[50 - 50];



