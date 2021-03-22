/* 
  JAVASCRIPT:
  let btnId = document.getElementById('btn');


  JQuery:
  let btnId = $('#btn');

*/


$(document).ready(function() {

// SKRIVA UT TEXT
// document.getElementById('div1').innerText = 'Detta är en text, skriven med Javascript';
// document.querySelector('#div1').innerText = 'Detta är en text, skriven med Javascript';
$('#div1').text('Detta är en text, skriven med JQuery');


// SKRIVA UT HTML
// document.getElementById('div2').innerHTML = '<p>paragraf</p>';
$('#div2').html('<p>paragraf</p>');

// ÄNDRA STYLING
// document.getElementById('div1').style.color = '#ff0000';
$('#div1').css('color', '#0000ff');

// document.getElementById('div1').style.fontSize = '2rem';
$('#div2').css('font-size', '2rem');


// document.getElementById('div2').style.display = 'none';
$('#div2').hide()

// document.getElementById('div2').style.display = '';
$('#div2').show()


// document.querySelector('#btn').addEventListener('click', () => {
//   let div2 = document.querySelector('#div2');
//   if(div2.style.display === 'none')
//     div2.style.display = '';
//   else
//     div2.style.display = 'none';
// })


// $('#btn').click(() => {
//   $('#div2').toggle();
// })


document.querySelector('#btn').addEventListener('click', () => {
  document.querySelector('#div2').classList.toggle('d-none');
})

})