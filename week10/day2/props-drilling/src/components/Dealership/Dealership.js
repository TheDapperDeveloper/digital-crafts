import React from 'react'
import "../../App.css"
import { useSelector, useDispatch } from 'react-redux'

export default function Dealership(props) {
    const bugatti = useSelector(state =>state.bugatti);
    const kawasaki = useSelector(state =>state.kawasaki);
    const dispatch = useDispatch()
    return (
        <div className="box">
            <h1>Dealership</h1>
            <h2>Cars in our dealership</h2>
            <p>{kawasaki}</p>
            <p>{bugatti}</p>
            <p>{props.mustang}</p>
            <p>{props.fordgt}</p>
            <button onClick= {()=>dispatch({type:"CHANGE_KAWASAKI"})}>Change Kawasaki</button>
        </div>
    )
}
