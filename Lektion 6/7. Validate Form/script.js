const regForm = document.querySelector('#regForm');
const email = document.querySelector('#email');
// const inputs = document.querySelectorAll('input');

const errors = [];

const validate = (id) => {
  let input = document.querySelector('#' + id);

  if(input.value === '' || input.value.length < 2) {
    input.classList.add('is-invalid');

    input.focus();
    return false;
  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

const validateEmail = (email) => {
  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.(\w{2,})+$/;

  // console.log(regex.test(email.value));
  if(regex.test(email.value)) {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true;
  } else {
    email.classList.add('is-invalid');

    email.focus();
    return false;
  }
}


regForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // validate('firstName');
  // validate('lastName');
  // validateEmail(email);

  // console.log(e.currentTarget.length);
  for(let i = 0; i < e.currentTarget.length; i++) {
    if(e.currentTarget[i].type === 'text') {
      // console.log(e.currentTarget[i].id);
      validate(e.currentTarget[i].id);
      errors[i] = validate(e.currentTarget[i].id);
    } else {
      validateEmail(email);
      errors[i] = validateEmail(email);
    }
  }

  console.log(errors)

  if(errors.includes(false)) {
    console.log('det finns fel i formuläret');
  } else {
    console.log('allt är bra... skickar formulär!')
  }

})