import Form from './components/Form';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
import ErrorPage from './components/ErrorPage';


import { FormDiv } from './styled-components/AppStyle.js';
import { MainContainer } from "./styled-components/AppStyle.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>

        <FormDiv className="App">
          <MainContainer>
            <Header/>
            <Sidebar/>
            <Route path="/form">
              <Form/>
            </Route>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="*">
              <ErrorPage/>
            </Route>
          </MainContainer>
        </FormDiv>
      </Switch>
    </Router>
  );
}

export default App;
