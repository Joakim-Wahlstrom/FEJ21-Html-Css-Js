let todos = []

const output = document.querySelector('#todos');
const form = document.querySelector('#todoForm');

fetch('https://jsonplaceholder.typicode.com/todos?_start=10&_limit=10')
  .then(res => res.json())
  .then(data => {
    todos = data;
    listTodos();
  })

const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    let template = `
    <div id="${todo.id}" class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mb-2">
      <h2 class="mb-0 pb-1">${todo.title}</h2>
      <button class="btn btn-danger">X</button>
    </div>
    `

    output.innerHTML += template;

  })
}

// listTodos();

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('#todoInput');

  if(input.value.trim() !== '') {
    input.classList.remove('is-invalid');

    // let todo = {
    //   id: Date.now().toString(),
    //   title: input.value,
    //   completed: false
    // }

    // todos.unshift(todo);

    // listTodos();

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: input.value,
        completed: false
      })
    })
    .then(res => res.json())
    .then(data => {

      let todo = {
        ...data,
        id: Date.now()
      }
      todos.unshift(todo);
      listTodos();
      input.value = '';

    })

  } else {
    input.classList.add('is-invalid');
  }

})


output.addEventListener('click', e => {
  console.log(e.target.tagName);

  if(e.target.tagName === 'BUTTON') {
    // if(e.target.classList.contains('btn-danger')){
    todos = todos.filter(todo => todo.id != e.target.parentNode.id);
    listTodos();
  }

})