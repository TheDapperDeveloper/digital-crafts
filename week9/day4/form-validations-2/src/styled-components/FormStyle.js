import styled from "styled-components"




export const FormDiv = styled.div.attrs(props => ({
    className:props.className,
}))`
    &.main-div {
        grid-area: formcontainer;
        justify-content: center;
        display:flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        background-color: #00806a;
        margin: auto;
        font-family: 'Noto Sans Display', sans-serif;
        border-radius: 10px;
        margin-top: 25px;
        background-color: gray;
        background-image: -webkit-linear-gradient(top left, #583e89, #0e2269); 
        color: white;
        height: 350px;
        width: 225px;
    }
`


export const UserInput = styled.input`
text-align: center; margin: auto;
height: 40px;
width: 150px;
background-color:#004d40;
background-image: -webkit-linear-gradient(bottom left, #ff5f78, #f89d6c);
border: none;
color: white;
border-radius: 20px;
font-family: 'Noto Sans Display', sans-serif;
font-weight: bolder;
margin-bottom: 5px;
margin-top: 10px;
`;

export const FormLayout = styled.form`
display: flex;
flex-direction: column;
align-items: center;
color: white;

`

export const StyledFields = styled.input.attrs(props => ({
    className: props.className,
}))`
    &.fields {
        margin-bottom: 10px;
        background: transparent;
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-family: 'Noto Sans Display', sans-serif;
        font-style: italic;
        width: 80%;
        background-color: white;
               
    }
`

export const ForgotPassword = styled.h4`
margin: 5px;
`;

export const Checkbox = styled.input.attrs(props => ({
    className: props.className,
}))`
    &.rememberMe {
        margin-bottom: 10px;
     left: 250px;
    }
`

