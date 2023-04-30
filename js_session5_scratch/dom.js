const h1element = document.getElementById("h1");
h1element.innerHTML = "new text in h1";

// document.getElementById("h1").innerHTML = "this is similar without a variable"

console.log(h1element);

const pelement = document.getElementById("p");
console.log(pelement);

//createElement
const h2element = document.createElement("h2");
h2element.innerHTML = "Achla bachla";
document.body.appendChild(h2element);

const h3element = document.createElement("h3");
h3element.innerHTML = "here is my h3";
document.body.appendChild(h3element);


// Targil
persons = [{ name: 'David', death: 78 }, { name: 'Avi', death: 94 }, { name: 'Noam', death: 87 }];

h3element.innerHTML = persons[0].name, persons[0].death;


const div1element = document.getElementsByClassName("blue");
for (let i = 0; i < div1element.length; i++) {
    const div = div1element[i];
    div.innerHTML = `div number ${i}`;
    div.style.color = "red";
}


// Targil

for (let i = 0; i <= 11; i++) {
    const rectangle = document.createElement("div");
    rectangle.style.height = "200px";
    rectangle.style.width = "300px";
    rectangle.style.background = "blue";
    rectangle.style.margin = "30px"
    rectangle.style.display = "inline-block"
    // rectangle.style.flexWrap = "wrap"
    document.body.appendChild(rectangle);
}
