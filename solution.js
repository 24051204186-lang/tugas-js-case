
const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanNamesArray = rawInput
    .trim()                     
    .split(',')                 
    .map(name => name.trim().toLowerCase()); 

const formattedString = cleanNamesArray.join(' | ');

console.log("--- OUTPUT CASE 1 ---");
console.log(formattedString); 


const products = [
    { name: 'Laptop', price: 1000, active: true }, 
    { name: 'Mouse', price: 20, active: false }, 
    { name: 'Keyboard', price: 50, active: true }
];

const activeProducts = products.filter(product => product.active);

const activeProductNamesUpper = activeProducts.map(product => product.name.toUpperCase());

const totalActivePrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log("\n--- OUTPUT CASE 2 ---");
console.log("Produk Aktif:", activeProducts);
console.log("Nama Produk (Uppercase):", activeProductNamesUpper); 
console.log("Total Harga Produk Aktif:", totalActivePrice); 