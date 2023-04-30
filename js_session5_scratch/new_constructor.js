// new
// constructor

let BookObj = function (name, pages, author) { // constructor
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.getDet = function () {
        return this.name + " " + this.author;
    }
};

function addBook(book) {
    library.push(book);
}
const library = [];

let book1 = new BookObj("Learn Javascript", 300, "Ran Bar Zik");
let book2 = new BookObj("Learn Python", 330, "Mike Thomas");

addBook(book1);
addBook(book2);

console.log(book1, book2);
console.log(book1.getDet());
console.log(library);