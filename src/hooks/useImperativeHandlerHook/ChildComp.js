import React, { useImperativeHandle, forwardRef, useState } from 'react';

const ChildComp =  forwardRef((props, ref) => {
    const [displayText, setDisplayText] = useState('');
    const [toggle, setToggle] = useState(false);
    
    console.log('inside ChildComp', props) 
    
    
    useImperativeHandle(ref, () => {
        return {
            setText(textVal) {
            console.log('inside imperative-->', textVal)
             if (textVal.length > 3) {
                setDisplayText(textVal);
                setToggle(true)
             }
            }
        }
    }, [])
  
  return (
    <div>
      {toggle ? displayText : 'length is tooshort'}
    </div>
  );
})

export default ChildComp;
