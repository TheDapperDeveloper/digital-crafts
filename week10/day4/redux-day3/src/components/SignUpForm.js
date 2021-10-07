import React from 'react'

import "./SignUpStyles.css"

export default function SignUpForm() {
    return (
        <div>
            <form clasName="signupForm" action="">
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="LastName"/>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="submit" />
            </form>
        </div>
    )
}
