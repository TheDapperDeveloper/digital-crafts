import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NameContainer, UserPicture } from "../styled-components/HeaderStyle.js";
import { HeaderContainer } from "../styled-components/HeaderStyle.js";
import { HideButton } from "../styled-components/HeaderStyle.js";
import { Welcome } from "../styled-components/HeaderStyle.js";
import { useSelector } from "react-redux";
import "../styled-components/PageStyle.css";

const URL = "https://randomuser.me/api/";
export default function Header(props) {
  const viewSidebar = props.viewSidebar;
  const setViewSidebar = props.setViewSidebar;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.UserData)

  // useEffect is a hook
  //hook that fires when the component is mounted
  // needed when data needs to appear when the page is loaded (APIs, fetching etc)
  useEffect(() => {
    const getData = async () => {
      const getTheData = await fetch(URL, {
        method: "GET",
        // mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await getTheData.json();
      console.log(jsonData);
      dispatch({
        type: "GET_USERDATA",
        payload: { ...jsonData.results[0] },
      });
    };
    getData();
    return () => {};
  }, []); // square brackets = dependency array, useEffect run one time. Only run if item in array has changed

  //useEffect(()=>{}) fire when we mount and anytime we call useState

  //useEffect(()=>{}, []) fire when we mount and only when we mount

  //useEffect(()=>{}, [variable]) fire when we mount and only when variable changes in value


  return (
    <HeaderContainer>
      <HideButton onClick={() => setViewSidebar(!viewSidebar)}>
        {viewSidebar ? "Hide Sidebar" : "Show Sidebar"}
      </HideButton>
    <NameContainer>
      <Welcome>
        Welcome, {userData?.name?.first} {""} {userData?.name?.last}!{" "}
      </Welcome>
      <UserPicture src={userData?.picture?.thumbnail} alt="" />
      </NameContainer>
    </HeaderContainer>
  );
}
