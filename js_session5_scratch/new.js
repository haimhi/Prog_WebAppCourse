// Objects, arrays, 'this', 'new', 
let BookObj = function (name, pages, author) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.getDet = function () {
        return this.name + " " + this.author;
    }
    let mol = "Feldheim";
    this.getMol = function () {
        return mol;
    }
    this.setMol = function (molArg) {
        mol = molArg;
    }
};

function addBook(book) {
    library.push(book);
}

const library = [];
let book1 = new BookObj("Learn JS", 300, "Ran Bar Zik");
let book2 = new BookObj("Learn Python", 330, "Simcha Wasserman");
let book3 = new BookObj("Learn Python", 330, "Simcha Wasserman");

addBook(book1);
addBook(book2);
addBook(book3);

console.log("The library has " + library.length + " books");
console.log(library);
book1.setMol("Oz v' Hadar")
console.log(book1.getMol());
console.log(book2.getMol());