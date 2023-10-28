// Code Keypad Component Here
import React from 'react';
function Keypad() {
    
    function handleChange() {
        return console.log("Entering password...");
    }

    return (
        <div>
            <input type="password" onChange={handleChange} placeholder='Enter Password ...'></input>
        </div>
    )
}

export default Keypad;