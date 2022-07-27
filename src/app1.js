import React, { useState } from 'react'

function App1() {

    const [age, setAge] = useState(19);
    //const [sibling, setSibling] = useState(10);

    const updateAge = () => setAge(age + 1);
    //const updateSibling = () => setSibling(sibling+1);
    
    return (
        <div>
            Today I am {age} years of Age
            <div>
                <button onClick={updateAge}>Get Older!</button>
            </div>
        </div>

    );
}

export { App1 }