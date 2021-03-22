const form = document.querySelector('#form');

const validateFirstName = () => {
  const firstName = document.querySelector('#firstName');
  const firstNameError = document.querySelector('#firstName-error');

  if(firstName.value === '') {
    firstNameError.innerText = 'Du måste ange ett förnamn';
  }
  else if(firstName.value.length < 2) {
    firstNameError.innerText = 'Du måste ange minst 2 tecken';
  }
  else {
    firstNameError.innerText = '';
  }
}


const validate = (id) => {
  const input = document.querySelector(id);
  const error = document.querySelector(id + '-error');

  if(input.value === '') {
    error.innerText = 'Du måste ange ett namn';
    return false;
  }
  else if(input.value.length < 2) {
    error.innerText = 'Du måste ange minst 2 tecken';
    return false;
  }
  else {
    error.innerText = '';
    return true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // validateFirstName();

  validate('#firstName');
  validate('#lastName');


  if(validate('#firstName') && validate('#lastName')) {
    console.log('formuläret skickas');
  }
})