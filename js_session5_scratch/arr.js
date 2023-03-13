let users = ['david', 'moshe', 'simcha', 12, {id: 1234, name: 'michael'}];
console.log(users);
console.log(users[3]);
console.log(users[4].name);

let books = [{title: 'Oby', author: 'Jon Ivey'}, "War of the Worlds", 'Hounds of Baskerville']
console.log(books);
console.log(books[0].author);


// add to arr
users.push("itzik"); // adds to end of arr
console.log(users);
users.unshift("yair"); // add to start of arr
console.log(users);

// remove from arr
users.pop(); // removes last in arr
console.log(users);
users.shift(); // removes first in arr
console.log(users);

// splice
let user = users.splice(2, 4);
console.log(user);
console.log(users);

// add. add to arr
books = ["bereshit", "shemot"];
books[2] = "vayikra";
console.log(books);

// arr length
console.log(users.length);
users[users.length] = "eitan";
console.log(users);


//targil
library = [{title: 'One Day', author: 'Todd Ren' }, { title: 'Next Week', author: 'Bob Nedd' }]
function addBook(bookName, bookAuthor) {
    library.push({ title: bookName, author: bookAuthor})
}
function removeLastBook() {
    library.pop();
}
addBook('One Month', 'Ted Blake'); 
console.log(library);


// strings are arrays

let myname = "Haim Hillel"
console.log(myname[0]);
console.log(myname[myname.length-1]);