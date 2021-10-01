
import React from "react";

function Signup (props) {
    
    return (
        <div>
            <h1>Sign Up</h1>
            {/* <form action=""> */}
            <input onChange={(e) => props.firstName(e.target.value)}  type="text" name="firstName" placeholder="First Name"  />
            <input onChange={(e) => props.lastName( e.target.value)} type="text" name="lastName" placeholder="Last Name" />
            <input onChange={(e) => props.dob(e.target.value)} type="date" name="dob" placeholder="Date of Birth" />
            <input onChange={(e) => props.address(e.target.value)} type="text" name="address" placeholder="Address" />
            <input onChange={(e) => props.city(e.target.value)} type="text" name="city" placeholder="City"  />
            <input onChange={(e) => props.state(e.target.value)} type="text" name="state" placeholder="State" />
            <input onChange={(e) => props.zipcode(e.target.value)} type="text" name="zipcode" placeholder="Zip Code" />
            <input onChange={(e) => props.username(e.target.value)} type="text" name="username" placeholder="Username" />
            <input onChange={(e) => props.email(e.target.value)} type="text" name="email" placeholder="E-mail" />
            <button onClick={() => props.SubmitButton()}>Submit</button>
            {/* </form> */}
        </div>
    )
}

export default Signup;

