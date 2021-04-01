


let users = []

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.id = Date.now().toString()
  }
}

const createUser = (firstName, lastName, email) => {
  const user = new User(firstName, lastName, email);

  users.push(user);
  newUser(user);
  console.log(users)
}

const newUser = user => {

  let _user = document.createElement('div');
  _user.classList.add('user', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-4');

  let text = document.createElement('div');

  let h3 = document.createElement('h3');
  h3.innerText = `${user.firstName} ${user.lastName}`;

  let small = document.createElement('small');
  small.innerText = user.email;

  let buttons = document.createElement('div');

  let changeBtn = document.createElement('button');
  changeBtn.classList.add('btn', 'btn-primary');
  changeBtn.innerText = 'change';

  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger');
  deleteBtn.innerText = 'delete';

  deleteBtn.addEventListener('click', () => {
    users = users.filter(u => u.id !== user.id)

    console.log(users)
  })


  text.appendChild(h3);
  text.appendChild(small);

  buttons.appendChild(changeBtn);
  buttons.appendChild(deleteBtn);

  _user.appendChild(text);
  _user.appendChild(buttons);

  output.appendChild(_user);

}



document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;

  if(firstName !== '' && lastName !== '' && email !== '') {
    createUser(firstName, lastName, email);
  }
})