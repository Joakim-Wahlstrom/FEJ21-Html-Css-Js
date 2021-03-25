const doSomething = (value) => {
  return new Promise((resolve, reject) => {
    if(value) {
      resolve('success data');
    } else {
      reject('error message');
    }
  })
}

// const test = doSomething(true);
// console.log(test);

// doSomething(true)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


const getRequest = url => {
  return new Promise((resolve, reject) => {

    const http = new XMLHttpRequest();
  // console.log(http)

    http.addEventListener('readystatechange', () => {
      // console.log(http.responseText);
      if(http.readyState === 4 && http.status === 200) {
        const data = JSON.parse(http.responseText);
        // console.log(data);
        resolve(data);
      } else if(http.readyState === 4) {
        // console.log('404 could not fetch data');
        reject(http.status + ' error, could not get data');
      }
    })

    http.open('GET', url);
    http.send();
  })
}



getRequest('user.json')
  .then(data => {
    console.log(data);
    return getRequest('todos.json');
  })
  .then(data => {
    console.log(data);
    return getRequest('todos2.json');
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })