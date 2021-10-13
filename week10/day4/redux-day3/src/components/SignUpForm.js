import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SignUpStyles.css";
import debounce from "lodash.debounce";
import counterData from "../reducers/counter";
import {
  ConsoleLogVariable,
  IncrementCounter,
  DecrementCounter,
} from "../action/SignUpFormActions";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterData);

  return (
    <div>
      <form clasName="signupForm" action="">
        <input
          onChange={(e) =>
            debounce(() =>
              dispatch(
                { type: "SIGNUPFORM_FIRSTNAME", payload: e.target.value },
                3000
              )
            )
          }
          type="text"
          placeholder="FirstName"
        />
        <input
          onChange={(e) => dispatch({ type: "text" })}
          placeholder="LastName"
        />
        <input
          onChange={(e) => dispatch({ type: "text" })}
          placeholder="Email"
        />
        <input
          onChange={(e) => dispatch({ type: "password" })}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
      {/* <button onClick={(e) => dispatch({ type: "INCREMENT_COUNTER", payload: counter})}>Increment</button>
    <button onClick={(e) => dispatch({ type: "FILL_INFO"})}>INFO</button> */}
      <div>
        <button onClick={() => ConsoleLogVariable("Brande")}>
          Print to Console
        </button>
      </div>
      <div>
        <button onClick={() => IncrementCounter(dispatch)}>Increment</button>
        <button onClick={() => DecrementCounter(dispatch)}>Decrement</button>
      </div>
    </div>
  );
}
