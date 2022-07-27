import React, { useState } from 'react'

function App3() {

    const [state, setState] = useState({
        age : 19,
        sibling : 10
    });
    
    const updateState = (e) => {
        const name = e.target.name;
        const value = state[name];
        setState({...state, [name] : value+1})
    }
    

    return (
        <div>
            <p>Today I am {state.age} years of Age</p>
            <p>I have {state.sibling} siblings</p>
            <div>
                <button name='age' onClick={updateState}>Get Older!</button>&nbsp;
                <button name='sibling' onClick={updateState}>More Siblings!</button>
            </div>
        </div>

    );
}

export { App3 }