/* let articleTitle = "Chodesh Tov"
let showArticle = true;
if (showArticle === true) {
    console.log(articleTitle);   
}

let age = 13;
let pay = false;
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

} */

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
console.log("Kiddush Levana", kiddushLevana);

// Switch case
let Age = 60;
switch (Age) {
  case 100:
    console.log("You are 100");
    break;
  case 90:
    console.log("You are 90");
    break;
  case 80:
    console.log("You are 80");
    break;
  default:
    console.log("You are not any of the ages listed");
}
