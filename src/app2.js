import React, { useState } from 'react'

function App2() {

    const [age, setAge] = useState(19);
    const [sibling, setSibling] = useState(10);

    const updateAge = () => setAge(age + 1);
    const updateSibling = () => setSibling(sibling+1);
    
    return (
        <div>
            <p>Today I am {age} years of Age</p>
            <p>I have {sibling} siblings</p>
            <div>
                <button name='age' onClick={updateAge}>Get Older!</button>&nbsp;
                <button name='sibling' onClick={updateSibling}>More Siblings!</button>
            </div>
        </div>

    );
}

export { App2 }