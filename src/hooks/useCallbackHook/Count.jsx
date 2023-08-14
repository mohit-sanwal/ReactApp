import React from 'react'

function Count ({text, value}) {
 console.log('Rendering Count component', text)
    return (
        <>
           <span>{text} -  {value}</span>
        </>
    )

}


export default React.memo(Count);
