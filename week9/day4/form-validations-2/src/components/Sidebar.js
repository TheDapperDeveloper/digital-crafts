import React from 'react'

import { SidebarContainer } from "../styled-components/SidebarStyle";

import { sidebardata } from './SidebarLinksData.js';
import '../styled-components/PageStyle.css';
import SidebarLinks from './SidebarLinks.js';

export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar
    return (
        <>
        {viewSidebar ? (
        <SidebarContainer> {sidebardata?.map((linkData) => 
        (<SidebarLinks linkData={linkData}/>))}  
             </SidebarContainer> 
            ) : ""}
             </>
    );
}
