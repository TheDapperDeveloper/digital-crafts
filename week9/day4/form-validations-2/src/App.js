import Form from './components/Form'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { FormDiv } from './styled-components/AppStyle.js'
import { MainContainer } from "./styled-components/AppStyle.js"


function App() {
  return (
    <FormDiv className="App">
      <MainContainer>
        <Header/>
        <Sidebar/>
        <Form/>
      </MainContainer>
    </FormDiv>
  );
}

export default App;
