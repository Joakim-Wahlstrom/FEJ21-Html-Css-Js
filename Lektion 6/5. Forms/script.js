const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(e.currentTarget[1]);

  // let firstName = e.currentTarget[0].value;
  // let lastName = e.target.lastName.value;
  // let address = regForm['address'].value;


  // console.log(firstName, lastName, address);

  if(!e.target['tac'].checked) {
    alert('You must accept the terms and conditions');
    return
  }

  let user = {
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    address: e.currentTarget.address.value,
    role: e.currentTarget.role.value,
  }

  console.log(user);

})