import React, { useRef, useState, useEffect } from 'react';
import ChildComp from './ChildComp'
import Watch from './Watch'

function ParentComp() {
  const inputRef = useRef(null);
  const childRef = useRef(null);
  const [val, setValue] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
    // here we are calling child fucntion from parent and passing argument to the same.
    childRef.current.setText(e.target.value);
  }

  return (
    <div>
      <input value={val} onChange={(e) => handleChange(e)} />
      <ChildComp ref={childRef} />
      <Watch />
    </div>
  );
}

export default ParentComp;
