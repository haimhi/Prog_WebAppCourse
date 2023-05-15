// timeout
console.log("start");

const timeout = setTimeout(() => {
    console.log("wait for timeout");
}, 5000)

clearTimeout(timeout);


// function timerRun(params) {
//     setTimeout(()=>{
//         console.log(`i run after ${params}`);
//     }, (params*1000));
    
// }
// timerRun(3);

// regex
const regex = /abcd/i;
const txt = "ABcd l;kajsdfoiu lkjal;dskjf abd lkljkjadi";
const findResult = regex.test(txt);
console.log(findResult);

// errors
function err() {
    const msgError = new Error("this is an error");
    throw msgError;
}
// console.error(msgError);

try {
    err();
} catch (error) {
    console.error(error);
}
