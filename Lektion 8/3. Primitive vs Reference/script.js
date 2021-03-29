let scoreOne = 50;
let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


const userOne = { name: 'Joakim', age: 34 };
const userTwo = userOne;

// console.log(userOne, userTwo);

userOne.name = 'Hans';
userOne.age = 50;

// console.log(userOne, userTwo);



let array = [
  { name: 'Joakim', age: 34 },
  { name: 'Jeanette', age: 33 },
  { name: 'Hans', age: 36 },
  { name: 'Tommy', age: 38 }
]


const user = array.find(u => u.name === 'Jeanette');

console.log(array);
console.log(user);

user.name = 'nisse'

console.log(array);

