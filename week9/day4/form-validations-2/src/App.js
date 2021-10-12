import Form from "./components/Form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Account from "./components/Account";
import Garage from "./components/Garage";

import { FormDiv } from "./styled-components/AppStyle.js";
import { MainContainer } from "./styled-components/AppStyle.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [viewSidebar, setViewSidebar] = useState(true);
  const register = true;

  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  console.log({ user });

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Form />
        </Route>
        <Route path="/register">
          <Form register={register}/>
        </Route>

        <FormDiv className="App">
          <MainContainer>
            <Route exact path="/"></Route>
            <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar} />
            <Sidebar viewSidebar={viewSidebar} />
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/garage">
              <Garage />
            </Route>
            <Route path="/errorpage">
              <ErrorPage />
            </Route>
          </MainContainer>
        </FormDiv>
      </Switch>
    </Router>
  );
}

export default App;
