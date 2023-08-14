import React, { useRef, useState, useEffect } from 'react';
import ChildComp from './ChildComp'

function Watch() {
  const [count, setCount] = useState(-1)
  
  const date = new Date()
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let timmer;
 
  useEffect(() => {
    if (count !== -1) {
        timmer = setTimeout(() => {
            let new_count = count + 1
            setCount(new_count);
        }, 1000)
    }
  }, [count])

  return (
    <div>
        <button onClick={() => {setCount(-1); clearTimeout(timmer);} }>stop watch</button>
       {hours} :  {minutes} : {seconds}
       <button onClick={() => setCount(0)}>start watch</button>
    </div>
  );
}

export default Watch;
