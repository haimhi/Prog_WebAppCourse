let p = new Promise((resolve, reject) => { 
    let a = 2 + 1;
    if (a !== 2) {
        resolve('and it worked!');
    }
    else {
        reject('and it failed');
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
});

 
        