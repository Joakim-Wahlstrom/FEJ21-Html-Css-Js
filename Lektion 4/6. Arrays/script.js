// ARRAYS - en lista med ett eller flera värden

/* 
    var names = []
    let names = []
    const names = []

*/

const multiArray = ['12', 12, true, {firstName: 'Joakim'}]; // Det här vill vi INTE göra

// Vi vill hålla samma datatyp inne i en array
const array = [0, 1, 2, 3, 4, 5];

// I det här fallet är datatypen objekt, vi vill hålla objekten strukturerade likadant
const users = [
  { firstName: 'Joakim', lastName: 'Wahlström', age: 34 },
  { firstName: 'Jeanette', lastName: 'Wahlström', age: 33 },
  { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 36 }
]

let names = ['Joakim', 'Jeanette', 'Hans'];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names.length);
console.log(names.indexOf('Jeanette'));



// Lägga till i början av en array
names.unshift('Colin');
console.log('med unshift: ' + names);

// Ta bort i början av en array
names.shift();
console.log('med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
console.log('med push: ' + names);

// Ta bort i slutet av en array
names.pop();
console.log('med pop: ' + names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt namn'
console.log('Ändrat: ' + names);

names[names.indexOf('Hans')] = 'Jack'
console.log('Ändrat med index of: ' + names);


// Det här försöker byta ut hela arrayen och det går inte när det är en const
// names = ['namn1', 'namn2']

delete names[1];

console.log(names)


// splice() - tar bort och/eller lägger till ett värde från en specifik position

names.splice(1, 1); //tar bort 1 från indexplats 1
names.splice(1, 0, 'Jeanette', 'Colin'); // tar bort 0 och lägger till Jeanette & Colin
names.splice(1, 2, 'Hans') // tar bort 2 from indexplats 1 och lägger till Hans

names.splice(names.indexOf('Hans'), 1, 'Jeanette')

console.log(names);


console.log(names.concat(['Hans', 'Tommy']));
names = names.concat(['Hans', 'Tommy']);
console.log(names);


// names.sort();         //sortera i bokstavsordning
// console.log(names);
// names.reverse();      //Vänder på arrayen så först blir sist osv.
// console.log(names);   
names.sort().reverse();  // sortera i bokstavsorning baklänges
console.log(names);

