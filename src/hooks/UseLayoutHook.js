import React, { useRef } from 'react';

function UseLayout() {
  const divRef = useRef(null);
  const inputRef = useRef(null);
  
  const onDivClick = () => {
    console.log('--', divRef.current);
  }

  const onInputChange = (e) => {
    e.stopPropagation()
    console.log('on input click', inputRef.current)
  }

  return (
    <div ref={divRef} onClick={onDivClick}>
      <span> click on Ref Element</span>
      <input ref={inputRef}  />
    </div>
  );
}

export default UseLayout;
