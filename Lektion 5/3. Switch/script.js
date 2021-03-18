let color = 'green';


switch(color) {
  case 'red': 
    console.log('color is red');
    break;
  case 'pink':
    console.log('color is pink');
    break;
  case 'orange':
    console.log('color is orange');
    break;
  case 'blue': 
    console.log('color is blue');
    break;
  case 'white': 
    console.log('color is white');
    break;
  case 'black': 
    console.log('color is black');
    break;
  default:
    console.log('color unknown!');
}


let nr = 13;

switch(nr) {

  case '13':
    console.log('nummret är en text med 13');
    break;
  case 13:
    console.log('nummret är ett nummer 13');
    break;

}

// När vi switchar så kollar den även datatyp på samma sätt som ===