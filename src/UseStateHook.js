import React, { useState } from 'react'
import './main-style.css'

function UseStateHook() {
    const [count, setCount] = useState(0);

    // function initialCount() {
    //     console.log("Run Function")
    //     return 4;
    // }

    function decrementCount() {
        setCount(prevCount => prevCount - 1);
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>Use State Hook</h1>
            <button  className="a" onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button className="a" onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseStateHook
