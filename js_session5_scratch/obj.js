// Objects introduction

let obj = {};
console.log(typeof obj)

let person = {
    username: "David",
    age: 30,
    password: "",
    admin: false
}
console.log(person);

person.age = 32;
person.password = "passdavid";
console.log(person.username + ' is ' + person.age + ' years old.');
console.log(person.password);


// Objects continued and oject within object

function printMsg(username, tel) {
    let user = {
        username: username,
        tel: tel,
        // alternate way of writing the above
        /*
        username,
        tel 
        */
        address: {
            city: "Jerusalem",
            street: "Yaffo",
            num_house: 10
        },
        // Object METHODS
        printUser: function() {
            console.log("Good evening " + user.username + ' your phone number is: ' + user.tel);
            console.log(this.address.city, this.address.street, this.address.num_house);        
        }
    }

    user.printUser();

  console.log(user["address"]["street"]);

    printKeyUser(user, "username");
    printKeyUser(user, "address");
}

function printKeyUser(user, keyUser) {
    console.log("print from function ", user[keyUser]);

}

printMsg("David", "054333884");









