import Form from './components/Form'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { MainContainer } from "./styled-components/AppStyle.js"


function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header/>
        <Sidebar/>
        <Form/>
      </MainContainer>
    </div>
  );
}

export default App;
