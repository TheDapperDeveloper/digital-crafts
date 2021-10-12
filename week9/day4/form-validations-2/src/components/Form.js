import React, { useState } from "react";
import { UserInput } from "../styled-components/FormStyle";
import { FormLayout } from "../styled-components/FormStyle";
import { StyledFields } from "../styled-components/FormStyle";
import { Checkbox } from "../styled-components/FormStyle";
import { FormDiv } from "../styled-components/FormStyle";
import { ForgotPassword } from "../styled-components/FormStyle";
import { createClient } from "@supabase/supabase-js";

import "../styled-components/PageStyle.css";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://rjvndvyfndqzdqjsvfzw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDM2NSwiZXhwIjoxOTQ2NzgwMzY1fQ.XKnniaKxeKV5sK-76BQ02uSf50TY8lzpyKKklNwm5cg"
);

export default function Form(props) {
  const [formData, setFormData] = useState({});
  console.log(formData);

  //login the user
  const login = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
        email: formData.username,
        password: formData.password,
    });
    console.log(user, session, error)
  };

  //register the user

  const register = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      email: formData.username,
      password: formData.password,
    });
  };
  return (
    <FormDiv className="main-div">
      <FormLayout action="">
        <h3>Login to continue!</h3>
        <StyledFields
          className="fields"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
        <StyledFields
          className="fields"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          t
          ype="password"
          placeholder="PASSWORD"
          name="password"
          value={formData?.password}
        />
        <div>
          <Checkbox type="checkbox" className="rememberMe" />{" "}
          <label for="rememberMe">Remember me</label>
        </div>
        <div className="Buttons">
          {props?.register ? (
            <UserInput
              onClick={(e) => register(e)}
              type="button"
              value="Register"
            />
          ) : (
            <UserInput onClick={(e) => login(e)} type="button" value="LOGIN" />
          )}
        </div>
        <ForgotPassword>FORGOT YOUR PASSWORD?</ForgotPassword>
        <ForgotPassword>New here? Sign up</ForgotPassword>
      </FormLayout>
    </FormDiv>
  );
}
