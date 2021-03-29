let todos = [
  {
    id: '1',
    title: 'todo one',
    completed: false
  },
  {
    id: '2',
    title: 'todo two',
    completed: false
  },
  {
    id: '3',
    title: 'todo three',
    completed: true
  },
]


const output = document.querySelector('#todos');
const form = document.querySelector('#todoForm');


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

listTodos();

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('#todoInput');

  if(input.value.trim() !== '') {
    input.classList.remove('is-invalid');
    
    let todo = {
      id: Date.now().toString(),
      title: input.value,
      completed: false
    }

    todos.unshift(todo);

    listTodos();
    input.value = '';
  } else {
    input.classList.add('is-invalid');
  }

})
