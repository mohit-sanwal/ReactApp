const apiurl1 = 'https://jsonplaceholder.typicode.com/todos/1';
const apiurl2 = 'https://jsonplaceholder.typicode.com/posts/1';
const apiurl3 = 'https://jsonplaceholder.typicode.com/posts';

const obj = {};

const someCall = () => {
  return fetch(apiurl1).then((res) => res.json()).then((res) => res).catch((err) => err);
}

const anotherCall = () => {
  return fetch(apiurl2).then((res) => res.json()).then((res) => res).catch((err) => err);
}

const postCall = () => {
  return fetch(apiurl3, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}}).then((res) => res.json()).then((res) => { obj.res2 = res; return obj}).catch((err) => err);
}

const useReport = async () => {
  await Promise.all([someCall(), anotherCall()])
  .then((response) => {
    obj.res = response
    console.log('obj---->', obj);
    return postCall()
  }).catch(() => console.log)
  console.log('data===', obj)
  return obj
}


export default useReport;
