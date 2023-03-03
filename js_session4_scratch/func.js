// Functions

let username = "Haim Hillel";

function printMsg() {
    console.log("Good evening");
    return true;
}

let msg1 = printMsg();
console.log(msg1);

printMsg();



function sum() {
    const NUM1 = 50;
    const NUM2 = 60;
    const SUM_NUM = NUM1 + NUM2;
    return SUM_NUM;
}
let sumFunc = sum();
console.log(sumFunc);

// New example
/* function sayHello(username) {
    alert("Hello " + username);
}
sayHello("David");
sayHello("Dan");
 */
function sumWithArg(num = 0, numM = 2) {
    let sumMulti = num * numM;
    return sumMulti;
}


let num3 = sumWithArg(4,0);
let num4 = sumWithArg(6,2);
let num5 = sumWithArg(9, 3);
let num6 = sumWithArg();
console.log(num3, num4, num5, num6);

// Exercise
function sefira(dayOfMonth) {
let minhag = "sefaradi";
let kiddushLevana = false;

if (minhag === "ashkenaz") {
  if (dayOfMonth > 14) {
    kiddushLevana = true;
  }
} else if (minhag === "sefaradi") {
  if (dayOfMonth > 21) {
    kiddushLevana = true;
  }
    }
    console.log("Kiddush Levana", kiddushLevana);
}
sefira(23);

// Exercise 2
function OmerCount(days) {
    let daysInWeek = days % 7;
    let weeks = (days - daysInWeek) / 7;
    console.log(days, "days is ", weeks, "weeks and ", daysInWeek, "days of the Omer");
}

OmerCount(15);

//

let NewFunc = function () {
    console.log("Function with variable")
}

NewFunc();

