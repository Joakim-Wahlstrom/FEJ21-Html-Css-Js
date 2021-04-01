const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

let users = [];
let cUser = null;

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.id = Date.now().toString();
    this.listener = false;
  }
}

const createUser = (firstName, lastName, email) => {
  const user = new User(firstName, lastName, email);

  users.push(user);
    newUser(user);

  console.log(users)
}

// const changeData = (user, cb) => {
//   user.firstName = firstName.value
//   user.lastName = lastName.value
//   user.email = email.value

//   btn.classList.remove('d-none');
//   btn2.classList.add('d-none');

//   cb();
// }

const changeData = () => {
  console.log(cUser)
  cUser.firstName = firstName.value; 
  cUser.lastName = lastName.value; 
  cUser.email = email.value; 

   btn.classList.remove('d-none');
   btn2.classList.add('d-none');
    // cUser = null
    btn2.removeEventListener('click', changeData);
    console.log(users);
    output.innerHTML = ''
    users.forEach(user => {
      newUser(user)
    })

    firstName.value = '';
    lastName.value = '';
    email.value = '';
}

const newUser = user => {

  let _user = document.createElement('div');
  _user.classList.add('user', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-4', 'animate');
  

  let text = document.createElement('div');

  let h3 = document.createElement('h3');
  h3.innerText = `${user.firstName} ${user.lastName}`;

  let small = document.createElement('small');
  small.innerText = user.email;

  let buttons = document.createElement('div');

  let changeBtn = document.createElement('button');
  changeBtn.classList.add('btn', 'btn-primary');
  changeBtn.innerText = 'change';
  changeBtn.addEventListener('click', () => {
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    email.value = user.email;
    btn.classList.add('d-none');
    btn2.classList.remove('d-none');

    cUser = user;

    btn2.addEventListener('click', changeData);


    // cUser = null;
    // if(!user.listener) {
    //   btn2.addEventListener('click', () => changeData(user, () => {
    //     h3.innerText = `${user.firstName} ${user.lastName}`;
    //     small.innerText = user.email;
    //   }))
    // }

 
    // user.listener = true
  })

  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger');
  deleteBtn.innerText = 'delete';

  deleteBtn.addEventListener('click', () => {
    users = users.filter(u => u.id !== user.id)
    _user.addEventListener('animationend', () => _user.remove())
    _user.classList.add('slideout')
    // setTimeout(() => {
    //   _user.remove()
    // }, 500)
    // console.log(users)
  })


  text.appendChild(h3);
  text.appendChild(small);

  buttons.appendChild(changeBtn);
  buttons.appendChild(deleteBtn);

  _user.appendChild(text);
  _user.appendChild(buttons);

  output.appendChild(_user);

}



document.querySelector('#form').addEventListener('submit', function(e) {
  e.preventDefault();

  if(firstName.value !== '' && lastName.value !== '' && email.value !== '') {
    createUser(firstName.value, lastName.value, email.value);
    this.reset()
  }
})