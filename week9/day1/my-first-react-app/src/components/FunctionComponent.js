import React, {useState} from 'react';


export default function FunctionalComponent() {
    const [counter, setCounter] = useState(0)
    const [studentName, setStudentName] = useState("Brande")
    return (
        <div>
            <p>Functional Counter</p>
            <p>Counter is: {counter}</p>
            <p>Student name: {studentName}</p>
            <button onClick={()=>setCounter(counter + 1)}>Increase</button>
            <button onClick={()=>setCounter(counter - 1)}>Decrease</button>
            <button onClick={()=>setStudentName("Brittney")}>Change the Student</button>
        </div>
    )
}