import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #004d40;
  list-style: none;
  height: 200vh;
  width: 50%;
`;

export const ListItems = styled.li`
    list-style-type: none;
    margin: 0;
    margin-bottom: 100px;
    margin-top: 50px;
    padding: 0;
    text-decoration: none;
    font-family: 'Noto Sans Display', sans-serif;
    display: flex;
    justify-content: center;
    

`;

export const ListItemsLink = styled.a`
    text-decoration: none;
    color: white;
    :hover {
      color:black;
      cursor:pointer;
    }
`;