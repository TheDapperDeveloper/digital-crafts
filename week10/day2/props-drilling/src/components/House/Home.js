import React from 'react'
import Garage from '../garage/Garage'
import "../../App.css"

export default function Home(props) {
    return (
        <div className="box">
            <h1>Home</h1>
            
            <Garage msutang={props.mustang}/>
        </div>
    )
}
