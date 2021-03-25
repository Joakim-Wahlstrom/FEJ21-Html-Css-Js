const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const tac = document.querySelector('#tac');


const validate = input => {

  switch(input.type) {

    case 'text':
      return validateText(input);

    case 'email':
      return validateEmail(input);

    case 'password':
      if(input.id !== 'password2')
        return validatePassword(input);
      else
        return samePassword(password, input);

    case 'checkbox':
      return validateCheck(input);

    default:
      break;
  }

} 




const validateText = input => {

  if(input.value.trim() === '') {
    setError(input, 'Name cannot be empty');
    return false;
  } else if(input.value.trim().length < 2) {
    setError(input, 'Name must be atleast 2 characters long');
    return false;
  } else {
    setSuccess(input);
    return true;
  }

}

const validateEmail = input => {

  let regEx = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,}$/

  if(input.value.trim() === '') {
    setError(input, 'Email address cannot be empty');
    return false;
  }else if(!regEx.test(input.value)) {
    setError(input, 'Email address is not valid');
    return false;
  } else {
    setSuccess(input);
    return true;
  }

}

const validatePassword = input => {

  if(input.value.trim() === '') {
    setError(input, 'Password cannot be empty');
    return false;

  } else if(input.value.trim().length < 5) {
    setError(input, 'The Password must be atleast 5 characters long');
    return false;

  } else if (!/\d/.test(input.value)) {
    setError(input, 'The Password must contain atleast one digit');
    return false;

  } else {
    setSuccess(input);
    return true;
  }

}

const samePassword = (pass, repeatPass) => {
  if(repeatPass.value.trim() === '') {
    setError(repeatPass, 'Password cannot be empty');
    return false;

  } else if (pass.value.trim() !== repeatPass.value.trim()) {
    setError(repeatPass, 'Passwords must match');
    return false;

  } else {
    setSuccess(repeatPass);
    return true;
  }
}

const validateCheck = input => {
  if(!input.checked) {
    setError(input, 'You must accept the terms');
    return false;

  } else {
    setSuccess(input);
    return true;
  }
}



const setError = (input, message) => {
  const inputGroup = input.parentElement;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');

  const error = inputGroup.querySelector('small');
  error.innerText = message;
}

const setSuccess = input => {
  const inputGroup = input.parentElement;
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');

}



form.addEventListener('submit', e => {
  e.preventDefault();

  const errors = [];

  for(let i = 0; i < form.length; i++) {
    errors[i] = validate(form[i])
  }

  if(!errors.includes(false)) {
    console.log('Allt gick bra, skickar formulär!')
    form.reset()
  }

  // console.log(errors);
})