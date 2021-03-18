const namesArray = ['Joakim', 'Hans', 'Jeanette', 'Jack', 'John', 'Liam', 'Wille', 'Colin'];

const usersArray = [
  { name: 'Joakim', email: 'joakim@mail.com', age: 34, status: true },
  { name: 'Hans', email: 'hans@mail.com', age: 36, status: false },
  { name: 'Jeanette', email: 'jeanette@mail.com', age: 33, status: false },
  { name: 'Jack', email: 'jack@mail.com', age: 24, status: true },
  { name: 'John', email: 'john@mail.com', age: 42, status: false },
  { name: 'Liam', email: 'laim@mail.com', age: 15, status: true },
  { name: 'Wille', email: 'wille@mail.com', age: 23, status: false },
]


// console.log(namesArray[2]);


//  FOR loopar

// loopar ett givet antal gånger
// for(let i = 0; i < 7; i++) {
//   console.log(i);
//   console.log(namesArray[i])
// }

// console.log(namesArray.length);

// Loopar igenom hela en array
// for(let i = 0; i < namesArray.length; i++) {
//   console.log(namesArray[i]);
// }


// FOR OF loopar

// for(let name of namesArray) {
//   console.log(name);
// }

// for(user of usersArray) {
//   // console.log(user);
//   console.log(user.name);
// }


// WHILE Loopar

// let i = 1;

// while(i < 5) {
//   console.log('while: ' + i);
//   i++;
// }

// console.log('i är ' + i);

// DO WHILE
// Körs alltid minst 1 gång
// do {
//   console.log('do while ' + i);
//   i++;
// } while(i < 7);

// console.log('i är ' + i);


// HIGH ORDER ARRAY METHODS

// FOREACH loopar

// namesArray.forEach(function(name) {
//   console.log(name);
// })

// namesArray.forEach(name => {
//   console.log(name);
// })

// usersArray.forEach(function(user) {
//   console.log(user);
// })

// let numberOfUsers = 0;

// usersArray.forEach(user => {
//   console.log(user.name, user.age, user.email);
//   numberOfUsers ++;
// })

// console.log(numberOfUsers);


// MAP

// const userEmail = usersArray.map(user => {
//   return user.email
// })

// console.log(userEmail);

// FILTER

const loggedIn = usersArray.filter(user => {
  return user.status === true;
})

console.log(loggedIn);