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
        background-color: #E7D2CC;
        margin: auto;
        font-family: 'Noto Sans Display', sans-serif;
        border-radius: 10px;
    }
`


export const UserInput = styled.input`
text-align: center; margin: auto;
height: 55px;
width: 240px;
background-color:#B9B7BD;
border-color: #B9B7BD;
background-color: ${(props) => (props.register ? "#868B8E":"")};
border-color:${(props) => (props.register ? "#868B8E":"")};
color: white;
border-radius: 10px;

font-family: 'Noto Sans Display', sans-serif;
font-weight: bold
`;

export const FormLayout = styled.form`
display: flex;
flex-direction: column;
align-items: center;

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
        
    }
`

