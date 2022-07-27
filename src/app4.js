import React, { useState } from 'react'

function App4(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count value is : {count}</p>
            <button onClick={() => setCount(0)}>Reset</button>&nbsp;
            <button onClick={() => setCount(prev => prev+1)}>Plus (+)</button>&nbsp;
            <button onClick={() => setCount(prev => prev-1)}>Minus (-)</button>
        </div>
    )
}

export {App4}