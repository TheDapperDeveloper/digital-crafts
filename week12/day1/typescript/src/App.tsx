import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import CardContainer from "./CardContainer";
import "./styles.css";

function App() {
  // const user = {
  //   firstName: "Brande",
  //   lastName: "Gilbert",
  //   username: "bg2021",
  // };

  const birthday = "10/20/1992";
  return (
    <div className="App">
      {/* <Header user={user} />
      <Header user={user} birthday={birthday} /> */}
      <CardContainer />
    </div>
  );
}

export default App;
