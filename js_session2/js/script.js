let total = 0;
const products = { grogger: 10, 'bottle of wine': 90, mask: 45 };
for (const [key, value] of Object.entries(products)) {
  console.log(key, value, 'nis');
  total += value;
}
let totalWithTax = total * 1.17;
totalWithTax = totalWithTax.toFixed(2);
console.log('total', total, 'nis');
console.log('total including tax', totalWithTax, 'nis');