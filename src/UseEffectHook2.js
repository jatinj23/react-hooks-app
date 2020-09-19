import React, { useState, useEffect } from 'react'


export default function UseEffectHook2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])

    return (
        <div>
            <h1>Use Effect Hook on Window Width</h1>
            <span>Width: </span>{windowWidth}
            <span>Height: </span>{windowHeight}
        </div>
    )
}
