// SCOPE

// let age = 34;   //Globalt scope
// // let age = 45;

// if(true) {
//   let age = 45;
//   let name = 'Joakim';    // local scope
//   console.log('inne i 1a kodblocket', age);
//   console.log('inne i 1a kodblocket', name);

//   if(true) {
//     let age = 100;
//     let name = 'Hans'
//     console.log('inne i kodblock 1.2', age, name);
//     var globalt = 'var';
//   }

// }

// // let name = 'Hans';

// console.log('utanför något block', age);
// console.log('utanför något block', name);

// console.log('utanför något block', globalt);



// FUNCTIONS



// Deklarera en funktion

// function hej() {
//   console.log('hej på dig');
// }

// const greet = function() {
//   console.log('hur är lääget');
// }

// Köra en funktion
// hej();
// greet();




let firstName = 'Joakim';


// const greet = function(name) {

//   // console.log(`Hej ${firstName} hur är läget?`)
//   console.log(`Hej ${name} hur är läget?`);
// }

// greet(firstName);
// greet('Hans');
// greet('Nisse');


const func1 = function(firstName, lastName) {
  let _fullName = `${firstName} ${lastName}`;
  console.log(_fullName);
}

// func1('Joakim', 'Wahlström');

// const calc = function(num1 = 0, num2 = 0) {
//   let sum = num1 + num2
//   return sum
// }

// let nummer = calc(5, 10);
// console.log(nummer);

// console.log(calc(200, 500))

// console.log(calc());


// ARROW FUNCTIONS

// const greet = (name) => {
//   return `Hej ${name} hur är läget?`;
// }
// const greet = name => {
//   return `Hej ${name} hur är läget?`;
// }

const greet = name => `Hej ${name} hur är läget?`;
// console.log(greet('Joakim'));


const calc = (num1 = 0, num2 = 0) => num1 + num2;
// console.log(calc(5,10));



// CALLBACK FUNCTIONS

let names = ['Joakim', 'Hans', 'Jeanette'];

// names.forEach(name => {
//   console.log(name)
// })

const minFunktion = callback => {
  let value = 25;
  callback(value);
}

// minFunktion(val => {
//   console.log(val);
// })


const func2 = (nr1, nr2, cb) => {
  let sum = nr1 + nr2;
  setTimeout(() => {
    cb(sum);
  },2000)
}

// func2(10, 20, summa => {
//   console.log(summa);
// })


// METHODS

let myName = names[0];
// console.log(myName);

let upper = myName.toUpperCase();
// console.log(upper);

let user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    return this.firstName + ' ' + this.lastName;
    // console.log(this);
  }
}
// user.fullName();
console.log(user.fullName())

let fullName = user.fullName();
console.log(fullName);