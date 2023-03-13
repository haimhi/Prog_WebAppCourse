console.log("Hello World!");

function hello() {
    console.log("Hello!");
}

const helloWorldArrow = () => {
    console.log("Hello Arrow!");

}
hello();
helloWorldArrow();

const tax = 1.17;
let product = 100;

function calculateTax() {
    let price = product * tax;
    console.log(`price is: ${price}`);
}

calculateTax();

function calculatePricePacket(box) {
    let price = 10 * box;
    console.log(`Packet price is: ${price}`);
}

// Targil

