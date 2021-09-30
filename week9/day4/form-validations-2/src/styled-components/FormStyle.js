import styled from "styled-components"

export const FormContainer = styled.div`
    grid-area: formcontainer;
`


export const FormDiv = styled.div.attrs(props => ({
    className:props.className,
}))`
    &.main-div {
        display:flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        background-color: #00806a;
        margin: auto;
        font-family: 'Noto Sans Display', sans-serif;
        border-radius: 10px;
        margin-top: 25px;
    }
`


export const UserInput = styled.input`
text-align: center; margin: auto;
height: 55px;
width: 240px;
background-color:#004d40;
border-color: #004d40;
background-color: ${(props) => (props.register ? "#80cbc4":"")};
border-color:${(props) => (props.register ? "#80cbc4":"")};
color: white;
border-radius: 10px;

font-family: 'Noto Sans Display', sans-serif;
font-weight: bold
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
        border: none;
        border-bottom: 1px solid #000000;
        font-family: 'Noto Sans Display', sans-serif;
        width: 80%;
        background-color: white;
        
        
    }
`

