import React from 'react'
import "../../App.css"

export default function Dealership(props) {
    return (
        <div className="box">
            <h1>Dealership</h1>
            <h2>Cars in our dealership</h2>
            <p>{props.mustang}</p>
            <p>{props.fordgt}</p>
        </div>
    )
}
