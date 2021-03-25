fetch('user.json')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data);
    return fetch('todos.json');
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    console.log(err);
  })
