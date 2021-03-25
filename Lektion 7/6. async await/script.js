// const getData = async () => {

// }
// const test = getData();
// console.log(test);

const getJson = async (url) => {
  const res = await fetch(url);
  // console.log(res);
  if(res.status !== 200) {
    throw new Error(res.status + ' error. cant fetch the data')
  }

  const data = await res.json();
  // console.log(data);

  // const res2 = await fetch('todos.json');
  // const data2 = await res2.json();

  // const res3 = await fetch('todos2.json');
  // const data3 = await res3.json();

  // console.log(data, data2, data3)

  return data;
}

getJson('user.json')
  .then(data => console.log(data))
  .catch(err => console.log(err))