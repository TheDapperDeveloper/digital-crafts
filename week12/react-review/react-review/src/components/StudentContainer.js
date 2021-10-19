import React from "react";
import Students from "./Students";

import { useSelector } from "react-redux";

export default function StudentContainer() {
  const students = useSelector((state) => state.students);
  return (
    <div>
      <h1>Student Container</h1>
      {students.map((student) => (
        <Students student={student} />
      ))}
    </div>
  );
}
