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
import { useSelector } from "react-redux";

function App() {
  const [viewSidebar, setViewSidebar] = useState(true);
  const register = true;

  const user = useSelector((state)=> state.UserData.username);

  return (
    <Router>
      <Switch>
        {user ? (
          <>
            <FormDiv className="App">
              <MainContainer>
                <Header
                  viewSidebar={viewSidebar}
                  setViewSidebar={setViewSidebar}
                />
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
          </>
        ) : (
          <>
            <Route path="/register">
              <Form register={register} />
            </Route>

            <Route path="/login">
              <Form />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
