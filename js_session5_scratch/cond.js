let articleTitle = "Chodesh Tov"
let showArticle = true;
if (showArticle === true) {
    console.log(articleTitle);   
}

let age = 21;
let pay = true;
let admin = false;
let wine = (age >= 18 && pay) || admin;


if (wine) {
    console.log(wine, "Go ahead and get the wine");
} else if (age === 17) {
    console.log("In another year you can buy wine")
} else {
    console.log("You are too young to buy wine")
}

if (admin) {
    console.log('Get your free wine')
} else {
    console.log("Pay for your wine")

} 

/*

//exercise
let dayOfMonth = 22;
let minhag = "sefaradi";
let kiddushLevana = false;

// should be an if within an if
if (minhag === "ashkenaz") {
  if (dayOfMonth > 14) {
    kiddushLevana = true;
  }
} else if (minhag === "sefaradi") {
  if (dayOfMonth > 21) {
    kiddushLevana = true;
  }
}
console.log("Kiddush Levana", kiddushLevana); */

/* 
// Switch case - unusual use
let Age = 40;
switch (true) {
  case (Age > 60):
    console.log("You are over 60");
    break;
  case 40:
  case 30:
    console.log("You are above 10");
    break;
  default:
    console.log("You are not any of the ages listed");
}
 */

// Short condition - if : else (check true condition)
let isAdmin = admin === true ? "You are allowed" : "You are not allowed"
console.log(isAdmin);

let isWine = age > 11 ? "Above 11" : "Below 11";
console.log(isWine);

let isPay = pay ? "you paid" : "you did not pay";
console.log(isPay);

// Constants - const
const LANG_MYSITE = "he";
  // following will throw error
LANG_MYSITE = "en";
  
