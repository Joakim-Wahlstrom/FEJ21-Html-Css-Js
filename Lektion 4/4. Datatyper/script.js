/* 
    Javascript Datatyper
    --------------------------------------------------
    String        =   Text
    Number        =   Tal, decimaltal, stora tal
    Boolean       =   Sant / Falskt   true/false
    null          =   Tomt, ingenting alls (manuellt)
    undefined     =   Tomt, har ej blivit definierad än (automatiskt)
    Object        =   ett object/klass som innehåller ett eller flera värden
    Array         =   OBJECT (lista med ett eller flera värden)
    Symbol        =   symboler används med objekt, kommer vi inte att använda
*/


/* 
    Deklarera variabler
    ---------------------------------------------------

    var name = 'Joakim';    // gör helst inte
    let name = 'Joakim';
    const name = 'Joakim';
    name = 'Joakim';        // gör inte såhär

    var = global variabel - accessbar överallt i koden
    let = lokal variabel - accessbar bara inom det angivna området
    const = lokal konstant variabel - kan inte skrivas över (undantag finns)



    C# exempel.
      string name = "Joakim";
      int age = 35

    Javascript exempel.
      let name = 'Joakim';
      let age = 35;
*/

/* 
    Strings:
      let name = "Joakim";   - använd inte
      let name = 'Joakim';   - Denna ska du använda
      let name = `Joakim`;   - Använd denna när du ska göra en template string ( shift + ´ )

      avsluta varje rad med ett ; ( det behövs inte, men är best practice )

*/

let name = 'Joakim';
let age = 34;

// console.log(name, age);

let text;

text = "Jag är \"bäst\" i världen";
text = 'Jag är "bäst" i världen';
text = 'Jag är "bäst" i \'hela\' världen'
text = `Jag är "bäst" i 'hela' världen`

text = 'Mitt namn är ' + name + ' och jag är ' + age + ' år gammal.';
text = "Mitt namn är " + name + " och jag är " + age + " år gammal.";
text = `Mitt namn är ${name} och jag är ${age} år gammal.`;            // Template string

// console.log(text);


// var varName = 'var Joakim';
// let letName = 'let Joakim';
// const constName = 'const Joakim';

// varName = 'var Hans';
// letName = 'let Hans';
// // constName = 'const Hans'

// console.log(varName)
// console.log(letName)

let firstName = 'Joakim';
let lastName = 'Wahlström';
// let fullName = firstName + ' ' + lastName;

let fullName = '  Joakim Wahlström    ';

// console.log(fullName);
// console.log(fullName.length); // Kollar längden på en string
// console.log(fullName[0]);     // skriver ut värdet på en specifik plats
// console.log(fullName[2]);
// console.log(fullName.indexOf('a')); // Hittar Index platsen på det första värdet som matchas
// console.log(fullName.lastIndexOf('a')) // Index på det sista förekommande värdet

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// console.log(fullName.split(' '))    // Delar en string på det angivna värdet

// console.log(fullName.trim())  // tar bort whitespace före och efter en string


// Numbers
// ------------------------
/* 
    Math operators

    +   lägg till
    -   ta bort
    *   gångra
    **  upphöjt i
    /   dela
    %   division remainder

    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till
    -=  ta bort
    *=  gångra och lägg till
    /=  dela och lägg til
    %=  division remainder

*/

let nr1 = 10;
let nr2 = 2.5;

// console.log(nr1, nr2);

// // plus och minus
// console.log(nr1 + nr2);
// console.log(nr1 - nr2);

// console.log(nr1);

// nr1 = nr1 + 1;
// console.log(nr1);
// nr1 += 1;
// console.log(nr1);
// nr1 ++;
// console.log(nr1);

// nr1 = nr1 - 1;
// console.log(nr1);
// nr1 -= 1;
// console.log(nr1);
// nr1 --;
// console.log(nr1);


// gånger
// console.log(nr1 * nr2);
// // Upphöjt i
// console.log(nr1 ** nr2);

// // vad blir kvar
// console.log(nr1 % 2);


let datatype;

// let data1, data2, data3, data4;




console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = null;
console.log(typeof datatype);   // det här är en bugg i javascript
datatype = true;
console.log(typeof datatype);
datatype = {};
console.log(typeof datatype);
datatype = [];
console.log(typeof datatype);