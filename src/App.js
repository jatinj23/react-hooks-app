import React from 'react'
import UseEffectHook from './UseEffectHook';
import UseEffectHook2 from './UseEffectHook2';
import UseStateHook from './UseStateHook';

export default function App() {
    return (
        <div>
            <UseStateHook />
            <UseEffectHook />
            <UseEffectHook2/>

        </div>
    )
}
