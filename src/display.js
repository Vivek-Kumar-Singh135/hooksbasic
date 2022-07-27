import React, { useContext } from "react";

const themeContext = React.createContext('light');

function Display() {
    const theme = useContext(themeContext)

    return(
        <div style={{background: theme==='dark' ? 'black' : 'palegoldenrod',
        color: theme==='dark' ? 'white' : 'palevioletred',
        width:'100%', minHeight:'200px'
        }}>
            {'The theme here is ' + theme}
        </div>
    );
}

export {Display}