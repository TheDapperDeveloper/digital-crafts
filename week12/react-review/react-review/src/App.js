import "./App.css";

import { useState } from "react";
import StudentContainer from "./components/StudentContainer";

const data = [
  { name: "Jose" },
  { name: "Britt" },
  { name: "Matt" },
  { name: "Dustin" },
  { name: "Justin" },
  { name: "Kayla" },
  { name: "Deanna" },
  { name: "Cameron" },
  { name: "Tim" },
  { name: "Ron" },
  { name: "Jamie" },
  { name: "Brande" },
  { name: "Jordan" },
  { name: "Pamela" },
  { name: "Jenny" },
  { name: "Xavier" },
];

function App() {
  // const [students, setStudents] = useState(data);
  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Data starts here</h3>
      <StudentContainer />
    </div>
  );
}

export default App;
