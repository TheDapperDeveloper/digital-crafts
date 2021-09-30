import React from 'react'

import { SidebarContainer } from "../styled-components/SidebarStyle.js";
import { ListItems } from "../styled-components/SidebarStyle.js";
import { ListItemsLink } from "../styled-components/SidebarStyle.js";
import '../styled-components/PageStyle.css';

export default function Sidebar() {
    return (
            <SidebarContainer>
             <ListItems><ListItemsLink href="index.html">Dashboard</ListItemsLink></ListItems>
             <ListItems><ListItemsLink href="index.html">Forms</ListItemsLink></ListItems>
             <ListItems><ListItemsLink href="index.html">UI Elements</ListItemsLink></ListItems>
             <ListItems><ListItemsLink href="index.html">Charts</ListItemsLink></ListItems>
             <ListItems><ListItemsLink href="index.html">Tables</ListItemsLink></ListItems>
             </SidebarContainer>
    );
}
