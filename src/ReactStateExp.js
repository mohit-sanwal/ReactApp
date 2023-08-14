import React from 'react';

let state = [];
let setters = [];
let firstRun = true;
let cursor = 0;


function createSetter(cursor) {
    return function setterWithCursor(newVal) {
        state[cursor] = newVal
    }
}

export function useState(initialVal) {
    if (firstRun) {
        state.push(initialVal);
        setters.push(createSetter(cursor))
        firstRun = false
    }

    const setter = setters[cursor];
    const value = state[cursor];

    cursor++;
    return [value, setter];
}

function RenderFunctionComponent() {
    const [firstName, setFirstName] = useState('Mohit');
    const [lastName, setLastName] = useState('s');

    return (
        <div>
          <Button onClick={() => setFirstName("Richard")}>Richard</Button>
          <Button onClick={() => setFirstName("Fred")}>Fred</Button>
        </div>
      );
}



// This is sort of simulating Reacts rendering cycle
function MyComponent() {
    cursor = 0; // resetting the cursor
    return <RenderFunctionComponent />; // render
  }
  
  console.log(state); // Pre-render: []
  MyComponent();
  console.log(state); // First-render: ['Rudi', 'Yardley']
  MyComponent();
  console.log(state); // Subsequent-render: ['Rudi', 'Yardley']
  
  // click the 'Fred' button
  
  console.log(state); // After-click: ['Fred', 'Yardley']


























