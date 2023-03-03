// Anonymous function
// (function () {
//   console.log("hello")
// })()

// Arrow function
// (() => {
//     console.log("hello lambda");
//   })()

function myFunc(arg) {
    let msg = arg();
    console.log(msg);
}

function myFuncReturn() {
    return "Good evening";
}

myFunc(myFuncReturn);

// Arrow Function version

// Callback

function myFunc(arg) {
    let msg = arg('hello ');
    console.log(msg);
}

myFunc((str) => {
    return str + "Good evening";
});



// Exercises pg. 119-120

function whoAmI(number) {
    if (typeof number !== 'number') {
        console.log('n/a');
        return;
    }
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let foo = whoAmI(2);
console.log(foo);
let bar = whoAmI(11);
console.log(bar);
let baz = whoAmI('a');
console.log(baz);

//

function callMe(arg1) {
    if (typeof arg1 !== 'function') {
        console.log('Not a function')
        return;
    } else {
        const answer = arg1();
        console.log(answer);
    }
}
// Test
callMe(() => { return 'hello'; });
callMe(() => { return 5; });
callMe('hello');
