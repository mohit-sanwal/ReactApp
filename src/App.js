import './App.css';
import React, { useEffect, useState, lazy, Suspense} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import useReport from './useReport';
import Counter from './hook/useMemoHook/Counter';
import ParentComponent from './hook/useCallbackHook/ParentComponent';
import ReducerHook from './hooks/ReducerHook'
import RefHook from './hooks/RefHook';
// import ParentComp from './hooks/useImperativeHandlerHook.js/ParentComp';
import CakeContainer from "./components/CakeContainer"
import Users from './components/Users';


const ParentComponentLazy = lazy(() => import('./hooks/useImperativeHandlerHook.js/ParentComp'));

function App() {
  // const [val, setVal] = useState(0)

  useEffect(() => {
    // for (let i=0; i<5; i++) {
    //   console.log('i---', i);
    //   setVal(val + i)
    // }
  }, [])
  // console.log('val---', val);
  console.log('store', store);
  return (
    <Provider store={store}>
      <div className="App">
        <p>test app</p>
        <CakeContainer />
        <Suspense fallback={<p> loading </p>}>
          <ParentComponentLazy />
        </Suspense>
        <Users />
        {/* <ParentComp /> */}
        {/* <RefHook /> */}
        {/* <ReducerHook /> */}
        {/* <header className="App-header">
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
        </header> */}
        {/* <Counter /> */}
        {/* <ParentComponent /> */}
      </div>
    </Provider>
  );
}

export default App;
