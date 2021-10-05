import React from 'react'
import Exotics from './Exotics'
import MuscleCars from './MuscleCars'
import "../../App.css"

export default function Cars() {
    return (
        <div className="box">
            <h1>Cars</h1>
            <Exotics/>
            <MuscleCars/>
        </div>
    )
}
