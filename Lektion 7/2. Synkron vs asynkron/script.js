const funk = (cb) => {
  setTimeout(() => {
    cb()
  }, 2000)
}

console.log(1);
console.log(2);
console.log(3);

for(let i = 0; i < 2; i++) {
  console.log('blocking ' + i);
}

funk(() => {
  console.log('callback');
})
// setTimeout(() => {
//   console.log('timeout')
// }, 2000)

console.log(4);
console.log(5);
console.log(6);