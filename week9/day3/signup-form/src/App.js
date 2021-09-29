import Signup from "./components/Signup"
import DB from "./components/DB"
import { useState } from "react"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipCode] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")

  // SubmitButton = () => {
    
  // }
  
  return (
    <div className="App">
      <Signup firstName = {setFirstName} lastName ={setLastName} dob ={setDob} address ={setAddress} city={setCity}  state={setState} zipcode={setZipCode} username={setUserName} email ={setEmail}/>
      <DB />
      
    </div>
  );
}

export default App;
