/* 
  GET
  POST
  PUT
  PATCH
  DELETE
*/

const getRequest = (url, cb) => {

  const http = new XMLHttpRequest();
  // console.log(http)

  http.addEventListener('readystatechange', () => {
    // console.log(http.responseText);
    if(http.readyState === 4 && http.status === 200) {
      const data = JSON.parse(http.responseText);
      // console.log(data);
      cb(undefined, data);
    } else if(http.readyState === 4) {
      // console.log('404 could not fetch data');
      cb('404 could not fetch data', undefined);
    }
  })

  http.open('GET', url);
  http.send();

}


console.log(1);
console.log(2);
console.log(3);
getRequest('user.json', (err, data) => {
  console.log(data);
  getRequest('todos.json', (err, data) => {
    console.log(data);
    getRequest('todos2.json', (err, data) => {
      console.log(data);
    })
  })
});
console.log(4);
console.log(5);
console.log(6);