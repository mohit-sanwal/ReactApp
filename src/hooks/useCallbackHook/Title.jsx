import React from 'react'

function Title() {
 console.log('Rendering Title component')

    return (
        <div>
           useCallback hook
        </div>
    )

}

export default React.memo(Title);
