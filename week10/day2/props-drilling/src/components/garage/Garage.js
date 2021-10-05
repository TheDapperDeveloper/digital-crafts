import React from 'react'
import Cars from './Cars'
import Motorcycles from './Motorcycles'
import "../../App.css"

export default function Garage(props) {
    return (
        <div className="box">
            <h1>Garage</h1>
            <p>{props.mustang}</p>
            <Cars mustang = {props.mustang}/>
            <Motorcycles/>
        </div>
    )
}
