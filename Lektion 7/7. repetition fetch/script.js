const btn = document.querySelector('#btn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('#json-output');

let posts = [];

btn.addEventListener('click', () => {
  fetch('text.txt')
    .then(res => res.text())
    .then(data => {
      textOutput.innerText = data;
    })
    .catch(err => console.log(err));
})


const getJsonAsync = async () => {

  try {
    const res = await fetch('posts.json')
    if(res.status !== 200) {
      throw new Error('eerrrrrroooorrr');
    }
    const data = await res.json();
    posts = data;

    jsonOutput.innerHTML = '';
    posts.forEach(post => {
      jsonOutput.innerHTML += `
      <div class="card my-3">
        <div class="card-body">
          <h3 class="card-title">${post.title}</h3>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
      `
    })
  }
  catch(err) {

  }


}

jsonBtn.addEventListener('click', getJsonAsync);