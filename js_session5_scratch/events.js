// const button = document.getElementById('generate');
// button.addEventListener('click', (e) => {
// })

// const h1 = Document.getElementById("h1");
// const username = Document.getElementById("username");


username.addEventListener("keyDown", function(event) {
  console.log(event);
  if (event.key === "a") {
    h1.innerHTML = "false";
  } else {
    h1.innerHTML = this.value;
  }
});

// Date
let dateObj = new Date(1990, 9, 12);
let curDate = new Date();
let birthday = curDate - dateObj;
let curAge;
console.log(curAge);

function calculateAge(birthdate) {
    var today = new Date();
    var birthdate = new Date(birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    var month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }
  
  var birthdate = prompt("Enter your birthdate in the format: MM/DD/YYYY:");
  var age = calculateAge(birthdate);
  alert("You are " + age + " years old.");
