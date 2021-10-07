import React from "react";
import { useDispatch } from "react-redux";

import "./SignUpStyles.css";
import debounce from "lodash.debounce";

export default function SignUpForm() {
  const dispatch = useDispatch();
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
        {/* // <input onChange={e=> dispatch({type:})type="text" placeholder="LastName" />
        // <input onChange={e=> dispatch({type:})type="text" placeholder="Email" />
        // <input onChange={e=> dispatch({type:})type="password" placeholder="Password" /> */}
        <input type="submit" />
      </form>
    </div>
  );
}
