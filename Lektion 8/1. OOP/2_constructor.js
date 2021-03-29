function Product(name, price, description) {
  this.productName = name,
  this.price = price,
  this.desc = description

  this.summary = function() {
    return `The product ${this.productName} costs ${this.price} kr.`;
  }
}


const product1 = new Product('Product1', 100, 'this is a product description');
const product2 = new Product('Product2', 200, 'this is a product description');


// console.log(product1.summary());
// console.log(product2.summary());

const obj = [
  'Joakim'
]

console.log(product1);
console.log(obj);
