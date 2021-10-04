import React from 'react'
import { SidebarLink } from '../styled-components/SidebarStyle'
export default function SidebarLinks(props) {
    console.log(props.linkData.path)
    console.log(props.linkData.name)   
    return (
        <>
         <SidebarLink to={props.linkData.path}>{props.linkData.name}</SidebarLink>   
        </>
        
    )
}
