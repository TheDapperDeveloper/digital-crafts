import "./App.css";

import { useState } from "react"; //hook to store local data
import StudentContainer from "./components/StudentContainer";

import { useDispatch, useSelector } from "react-redux";
//useSelector grabs one shelf from the store not all shelves

// const data = [
//   { name: "Jose" },
//   { name: "Britt" },
//   { name: "Matt" },
//   { name: "Dustin" },
//   { name: "Justin" },
//   { name: "Kayla" },
//   { name: "Deanna" },
//   { name: "Cameron" },
//   { name: "Tim" },
//   { name: "Ron" },
//   { name: "Jamie" },
//   { name: "Brande" },
//   { name: "Jordan" },
//   { name: "Pamela" },
//   { name: "Jenny" },
//   { name: "Xavier" },
// ];

function App() {
  const [inputValue, setInputValue] = useState(0);
  // const [students, setStudents] = useState(data);
  const dispatch = useDispatch();
  // dispatch({ type: "GET_STUDENTS" });
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Data starts here</h3>
      {counter}
      <input
        onChange={(e) => setInputValue(parseInt(e.target.value))}
        type="number"
      />
      <button
        onClick={() => dispatch({ type: "THE_COUNTER", payload: inputValue })}
      >
        Increase Counter
      </button>
      <StudentContainer />
    </div>
  );
}

export default App;
