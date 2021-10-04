import React, { useEffect, useState } from 'react'
import { UserPicture } from "../styled-components/HeaderStyle.js"
import { HeaderContainer } from "../styled-components/HeaderStyle.js"
import '../styled-components/PageStyle.css';

const URL ="https://randomuser.me/api/";
export default function Header(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar
    const [user, setUser] = useState({});
    // useEffect is a hook
    //hook that fires when the component is mounted
    // needed when data needs to appear when the page is loaded (APIs, fetching etc)
    useEffect (() => {
        const getData = async() => {
            const getTheData = await fetch(URL, {
                method: 'GET', 
                // mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
            },
            });
            const jsonData = await getTheData.json();
            console.log(jsonData);
            setUser(jsonData?.results[0]);
        };
        getData();
        return () => {};
    }, []);// square brackets = dependency array, useEffect run one time. Only run if item in array has changed
    
    //useEffect(()=>{}) fire when we mount and anythime we call useState

    //useEffect(()=>{}, []) fire when we mount and only when we mount

    //useEffect(()=>{}, [variable]) fire when we mount and only when variable changes in value  
    return (
        <HeaderContainer>
            <button onClick={() => setViewSidebar(!viewSidebar)}>
            {viewSidebar ? "Hide Sidebar": "Show Sidebar"}</button>
             <UserPicture src={user?.picture?.large} alt="" />
             <h3>Welcome, {user?.name?.first} {""} {user?.name?.last}! </h3>      
        </HeaderContainer>
    )
}

