
import React from "react";

function Signup (props) {
    const { fName } = props;

    return (
        <div>
            <h1>Sign Up</h1>
            <form action="">
            <input onChange={(e) => console.log(e.target.value)}  type="text" name="firstName" placeholder="First Name"  />
            <input onChange={(e) => console.log(e.target.value)} type="date" name="dob" placeholder="Date of Birth" />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="lastName" placeholder="Last Name" />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="address" placeholder="Address" />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="city" placeholder="City"  />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="state" placeholder="State" />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="zipcode" placeholder="Zip Code" />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="username" placeholder="Username" />
            <input onChange={(e) => console.log(e.target.value)} type="text" name="email" placeholder="E-mail" />
            <input onChange={(e) => console.log(e.target.value)} type="button" value="Submit" />
            </form>
        </div>
    )
}

export default Signup;

