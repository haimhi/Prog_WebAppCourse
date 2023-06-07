console.log("Enter amount");
console.log("Access server and receive the dollar exchange rate");
console.log("Enter amount");

function getDollar(cbFunc) {
    setTimeout(() => {
        let dollar = 10;
        cbFunc(dollar);
    },1000)
}

getDollar((rateDollar) => {
    console.log("Dollar exchange rate is ",rateDollar,);
});

function getStock(cbFunc) {
    setTimeout(() => {
        let stock = 2;
        cbFunc(stock);
    },1000)
}

getDollar((rateDollar) => {
    getStock((rateStock) => {
        console.log("Exchange rate is ", rateDollar * rateStock,);
        console.log("Stock exchange rate is ", rateStock,);
    })
})

// promise

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });