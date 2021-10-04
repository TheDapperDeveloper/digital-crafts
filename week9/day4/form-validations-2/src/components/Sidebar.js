import React from 'react'

import { ListItems, SidebarContainer } from "../styled-components/SidebarStyle.js";
import { Link } from 'react-router-dom';


import '../styled-components/PageStyle.css';

export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar
    return (
        <>
        {viewSidebar ? (
        <SidebarContainer>
               <Link to="/">
                <ListItems>Home</ListItems>
                </Link>
                <Link to="/dashboard">
                <ListItems>Dasboard</ListItems>
                </Link>
                <Link to="/form">
                <ListItems>Form</ListItems>
                </Link>
             </SidebarContainer> 
            ) : ""}
             </>
    );
}
