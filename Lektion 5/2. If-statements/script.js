// BOOLEAN - true / false

let email = 'joakim.wahlström@gmail.com';

// console.log(email.includes('@'));
// console.log(email.includes('5'));

let names = ['Joakim', 'Hans', 'Jeanette'];

// console.log(names.includes('Joakim'));
// console.log(names.includes('Colin'));

// let bool = true;
// console.log(bool);

// bool = false;
// console.log(bool);


let number = 13;
let string = '13';


// console.log(number == 13);
// console.log(number == 20);
// console.log(number != 13);
// console.log(number != 20);


// större än
// console.log(number > 10);
// större än eller lika med
// console.log(number >= 13);


// Mindre än
// console.log(number < 10);
// mindre eller lika med
// console.log(number <= 13);


// två = tecken jämför bara värdet
// console.log(string == number);
// tre = jämför värdet OCH datatyp
// console.log(string === number);

// console.log(string != number);
// console.log(string !== number);


// IF SATSER

// if(string == number) {
//   console.log('påståendet är sant: string == number')
// }

// if(string === number) { // det här är falskt
//   console.log('påståendet är sant: string == number') // Det här skrivs då inte ut
// }

// if(string != number) { // det här är falskt
//   console.log('påståendet är sant: string != number')
// }

// if(string !== number) {
//   console.log('påståendet är sant: string !== number')
// }


/* 
  <     mindre än
  >     större än
  <=    mindre eller lika med
  >=    större eller lika med

  &&    och
  ||    eller
  !     inte

*/

let st = '15';
let nr = 13;

// if(st > nr) {
//   console.log('st är större än nr');
// }

// if(typeof st == typeof nr) {    // det här är falskt!
//   console.log('st är samma datatyp som nr');
// }

// if(st > nr && typeof st == typeof nr) {
//   console.log('st är större än nr OCH det är samma datatyp, Allt måste vara sant');
// }

// if(st > nr || typeof st == typeof nr) {
//   console.log('st är större än nr ELLER det är samma datatyp. En av dom måste vara sann');
// }


// Man kan vända på alla statements med ett ! innan

// if(!(typeof st == typeof nr)) {    // det här är falskt!
//   console.log('st är INTE samma datatyp som nr');
// }


// let loggedIn = true;

// if(loggedIn) {
//   console.log('användaren är inloggad');
// }


// if, elseif och else


let name = 'Jeanette';

// if(name == 'Joakim') {
//   console.log('namnet är ' + name);
// }
// if(name == 'joakim') {
//   console.log('namnet är ' + name);
// }

if(false) {
  console.log('det här kommer inte synas')
} else {
  console.log('det här syns')
}


if(name.toLowerCase() == 'joakim') {
  console.log('namnet är ' + name);
}
else if(name == 'Jeanette') {
  console.log('Hej Jeanette');
}
else if(name == 'Jeanette') {
  console.log('hej 2')
}
else {
  console.log('Okänd person');
}