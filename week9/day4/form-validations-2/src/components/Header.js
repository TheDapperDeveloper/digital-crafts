import React, { useEffect, useState } from 'react'

const URL ="https://randomuser.me/api/";
export default function Header() {

    const [user, setUser] = useState({});
    // useEffect is a hook
    //hook that fires when the component is mounted
    // needed when data needs to appear when the page is loaded (APIs, fetching etc)
    useEffect (() => {
        const getData = async() => {
            const getTheData = await fetch(URL, {
                method: 'POST', 
                // mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
            },
            });
            const jsonData = await getTheData.json();
            console.log(jsonData);
            setUser(jsonData?.results[0]?.picture?.thumbnail);
        };
        getData();
        return () => {};
    }, []);// square brackets = dependency array, useEffect run one time. Only run if item in array has changed
    
    //useEffect(()=>{}) fire when we mount and anythime we call useState

    //useEffect(()=>{}, []) fire when we mount and only when we mount
    
    //useEffect(()=>{}, [variable]) fire when we mount and only when variable changes in value  
    return (
        <div>
             <h1>Header</h1>
             <img src={user} alt="" />
        </div>
    )
}

