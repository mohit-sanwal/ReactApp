import React, { useReducer } from 'react';

const reduce = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT': 
        return {...state, count: action.value}
    case 'DECREMENT': 
    return {...state, count: action.value}
    default:
       return state;
  }
}


function ReducerHook() {
  const [state, dispatch] = useReducer(reduce, {count: 0, text: 'abc'});
  return (
    <div>
      <button onClick={() => dispatch({type: 'INCREMENT', value: state.count + 1})}> increment count </button>
        <span style={{margin: 12}}>{state.count}</span>
      <button onClick={() => dispatch({type: 'DECREMENT', value: state.count - 1})}> decrement count </button>
    </div>
  );
}

export default ReducerHook;
