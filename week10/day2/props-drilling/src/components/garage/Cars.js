import React from 'react'
import Exotics from './Exotics'
import MuscleCars from './MuscleCars'
import "../../App.css"

export default function Cars(props) {
    return (
        <div className="box">
            <h1>Cars</h1>
            <Exotics/>
            <MuscleCars mustang={props.mustang}/>
        </div>
    )
}
