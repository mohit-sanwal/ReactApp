import React from 'react'
import { useState, useMemo } from 'react';


function Button ({handleClick, children}) {
 console.log('Rendering button component', children)

    return (
        <>
           <button onClick={handleClick}> {children} </button>
        </>
    )

}


export default React.memo(Button);
