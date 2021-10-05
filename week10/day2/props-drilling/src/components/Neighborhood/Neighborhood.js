import React from 'react'
import Home from '../House/Home'
import "../../App.css"

export default function Neighborhood(props) {
    return (
        <div className="box">
            <h1>Neighborhood</h1>
            
            <Home mustang={props.mustang}/>
        </div>
    )
}
