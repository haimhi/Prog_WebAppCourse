for (let i = 0; i <= 10; i++) {
    console.log(i);

}

// while
let i = 0;
while (i < 10) {
    console.log("while loop", i);
    i++;
}


// forEach - for working with arrarys

let arrUsers3 = ["david", "moshe", "avi", "leo", "eitan"];
delete arrUsers3[3]

arrUsers3.forEach((value, key) => {
    console.log(value, key);
    
})

let arr = ["david", "moshe",, "daniel", "eithan"]
arr.forEach((a,b) => {
    console.log(a);
    console.log(b);
});