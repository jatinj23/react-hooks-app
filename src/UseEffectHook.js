import React, { useState, useEffect } from 'react'

export default function UseEffectHook() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         .then(response => response.json())
    //         .then(json => setItems(json))
    // }, [resourceType])

    useEffect(() => {
        console.log('resource changed');

        return (() => {
            console.log('cleaning up the previous rendered resource');
        })
    }, [resourceType])

    return (
        <>
            <h1>Use Effect Hook</h1>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {/* {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
        </>
    )
}
