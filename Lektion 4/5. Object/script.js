/* 
    OBJECT - innehåller ett eller flera värden
    var person = {}
    let person = {}
    const person = {}


    används i klasser, objekt, json
    använder sig av key:value pairs
    alla värden är separerade av ett ,
*/

    // JS Object
    // let person = {
    //   firstName: 'Joakim',
    //   lastName: 'Wahlström'
    // }

    // JSON Object
    // let json = {
    //   "firstName": "Joakim",
    //   "lastName": "Wahlström",
    //   "age": 34
    // }

    // kovertera JS till JSON
//     let json = JSON.stringify(person)

//     // konvertera JSON till JS
//     let js = JSON.parse(json);

// console.log(person);
// console.log(json);
// console.log(js);


const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 34,
  address: {
    street: 'en gata',
    nr: 12,
    zipCode: 72345,
    city: 'Västerås'
  },
  phoneNumbers: ['076-1234567', '070-9876543'],
  isActive: true
}

let key = 'age'

console.log(user.firstName);
console.log(user['lastName']);
console.log(user[key]);

console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}`);

user.firstName = 'Jeanette';
// user = 'Jeanette'
console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}`);

user.email = 'joakim.wahlstrom@mail.com';
console.log(user);


// let firstName = user.firstName;
// let age = user.age;
// let city = user.address.city;

// Destructuring objects
let { firstName: name, age, address:{city} } = user

console.log(`Jag heter ${name} är ${age} år gammal och bor i ${city}`)