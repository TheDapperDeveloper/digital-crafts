import React from 'react'
import "../../App.css"

export default function MuscleCars(props) {
    return (
        <div className="box">
            <h1>Muscle Cars</h1>
            <p>{props.mustang}</p>
        </div>
    )
}

