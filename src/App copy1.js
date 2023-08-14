import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import useReport from './useReport';

function App() {
  const api1URL = 'https://jsonplaceholder.typicode.com/posts/1'
  const api2URL = 'https://jsonplaceholder.typicode.com/posts'
  const api3URL = 'https://jsonplaceholder.typicode.com/posts'
  const api4URL = ''

  const fetchData = (apiObj) => {
     return fetch(apiObj.url, {method:apiObj.method, body: apiObj.body, headers: {'Content-Type': 'application/json'}})
     .then((data) => data.json()).then((data) => {
        return data;
     }).catch((error) => {
        console.log('error');
        return error
     } );
  }

  const api1 = async() => {
       const result1 = await fetchData({url: api1URL});
       let a = result1.userId
       const result2 = await fetchData({url: api2URL});
       const obj = {
        title: 'foo',
        body: 'bar',
        userId: a,
      }
       const result3 = await fetchData({url: api2URL, method: 'POST', body: JSON.stringify(obj)});
       console.log('result1', result1);
       console.log('result2', result2)
       console.log('result3', result3)
      return {result1, result2, result3}
  }

  const api2 = (url, paramObj) => {
    let urlNew = url;
    Object.entries(paramObj).map(
      ([k, v]) => ({
        urlNew = url.replace("{" + k + "}", v),
      })
    );
    console.log('new url', urlNew);
  }

  const api3 = () => {
    
  }

  const api4 = () => {
    
  }
  useEffect(() => {
    console.log('====>', api1().then((data) => {
      console.log('data', data);
    }));
  //  let b = await useReport();
    // console.log('b', b)
    // let b = a.then((res) => res.json())
    // console.log ('b', b, a)

    const obj= [{a:3, b:7},{a:4, b:7},{a:5, b:7},{a:6, b:7}];
    const arr = obj.map((data) => {
      let a1 = {};
      a1.a = data.a
      return a1
    });
    console.log('arr=====?', api2('htttpsfkdlflksdfdsfdslfhsdlk', {id: 8}));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
