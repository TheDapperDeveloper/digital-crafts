import React from 'react'
import { useSelector } from 'react-redux'

export default function Motorcycles() {

    const kawasaki = useSelector(state =>state.kawasaki);
    return (
        <div>
            <h1>Motorcycles</h1>
            <p>{kawasaki}</p>
        </div>
    )
}
