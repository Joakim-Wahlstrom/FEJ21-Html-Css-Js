const output = document.querySelector('#output');

const listPosts = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  const res = await fetch(url);
  const posts = await res.json();

  output.innerHTML = '';
  posts.forEach(post => {
    let html = `
    <div class="card my-3">
      <a href="details.html?id=${post.id}" class="post p-3">
        <h3>${post.title}</h3>
        <p>${post.body.slice(0, 50)}...</p>
      </a>
    </div>
    `

    output.innerHTML += html;
  })
}

window.addEventListener('DOMContentLoaded', () => {
  listPosts();
})