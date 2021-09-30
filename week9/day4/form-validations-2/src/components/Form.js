import React, {useState} from 'react'
import { UserInput } from '../styled-components/FormStyle';
import { FormLayout } from '../styled-components/FormStyle';
import { StyledFields } from '../styled-components/FormStyle';
import { FormDiv } from '../styled-components/FormStyle';
import '../styled-components/PageStyle.css';

export default function Form() {
    const [formData, setFormData] = useState({})
    return (
        <FormDiv className="main-div"> 
            <FormLayout action="">
                <h1>LOGIN</h1>
                <StyledFields className="fields" onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})} type="text" placeholder="USERNAME"  name="username" value={formData?.username}/>
                <StyledFields className="fields" onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})} type="text" placeholder="EMAIL" name="email" value={formData?.email}/>
                <StyledFields className="fields" onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})}t ype="password" placeholder="PASSWORD" name="password" value={formData?.password}/>
                <h3>FORGOT YOUR PASSWORD?</h3>
              <div className="Buttons">
                <UserInput register type="button" value="REGISTER"/>
                <UserInput type="button" value="SIGN IN"/>
                </div>  
            </FormLayout>
            
        </FormDiv>
    )
}
