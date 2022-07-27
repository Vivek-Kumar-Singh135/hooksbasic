import React, { useEffect, useState } from 'react'

function App5(){
    const [age, setAge] = useState(0);
    const updateAge = () => setAge(age+1);

    useEffect(() => {
        document.title = 'You are ' + age + ' years old';
    })

    return(
        <div>
            <p>Look at the title of the current tab in your browser</p>
            <button onClick={updateAge}>Update Title!!</button>
        </div>
    );
}

export {App5}