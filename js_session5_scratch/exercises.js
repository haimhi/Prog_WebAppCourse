// מערכים
let foo = ['first', 'second', 'third'];
console.log(foo[0]);

foo = () => console.log('hello');
let bar = ['first', 'second', 'third', foo];
console.log(bar);
// above displays weird

// constants
const foo2 = 100;
let foo3; // as const - generates error const must be initialized
console.log(foo3);

// arrow functions
let myFunc = (arg = 'aha\'h ') => {
    return arg + 'achlah b\'challah';
}
console.log(myFunc());

function myFunc2(arg) {
    return arg();
}