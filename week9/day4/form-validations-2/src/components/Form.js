import React, {useState} from 'react'
import { UserInput } from '../styled-components/FormStyle';
import { FormLayout } from '../styled-components/FormStyle';
import { StyledFields } from '../styled-components/FormStyle';
import { Checkbox } from '../styled-components/FormStyle';
import { FormDiv } from '../styled-components/FormStyle';
import { ForgotPassword } from '../styled-components/FormStyle';

import '../styled-components/PageStyle.css';

export default function Form() {
    const [formData, setFormData] = useState({})
    return (
        <FormDiv className="main-div"> 
            <FormLayout action="">
                <h3>Login to continue!</h3>
                <StyledFields className="fields" onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})} type="text" placeholder="USERNAME"  name="username" value={formData?.username}/>
                <StyledFields className="fields" onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})}t ype="password" placeholder="PASSWORD" name="password" value={formData?.password}/>
                <div>
                <Checkbox type="checkbox" className="rememberMe"/> <label for="rememberMe">Remember me</label>
                </div>
              <div className="Buttons">
                <UserInput type="button" value="LOGIN"/>
                </div>  
                <ForgotPassword>FORGOT YOUR PASSWORD?</ForgotPassword>
                <ForgotPassword>New here? Sign up</ForgotPassword>
                
            </FormLayout>
        </FormDiv>
    )
}

