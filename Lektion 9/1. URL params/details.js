// console.log(window.location)
// const params = new URLSearchParams(window.location.search)
// console.log(params)
// const id = params.get('id')
// console.log(id)

const id = new URLSearchParams(window.location.search).get('id');

const getPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/' + id;

  const res = await fetch(url);
  const post = await res.json();

  output.innerHTML = `
  <div class="card my-3">
    <div class="post p-3">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  </div>
  `

}

// getPost()

window.addEventListener('DOMContentLoaded', () => {
  getPost();
})