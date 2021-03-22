const div = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');

// div.innerText = 'Hej';
const changeText = () => {
  div.innerText = 'Ny text!'
}

// console.log(div2.id)

btn.addEventListener('click', () => {
  div2.style.backgroundColor = '#cecece';
  document.body.style.backgroundColor = '#333';
  div2.innerHTML = `
  <ul>
    <li>asd</li>
    <li>asasdd</li>
    <li>ash465d</li>
  </ul>
  `

  changeText();
})