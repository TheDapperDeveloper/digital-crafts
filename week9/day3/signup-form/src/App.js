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
  const [userDetails, setUserDataList] = useState([])



  const SubmitButton = () => {
    setUserDataList([...userDetails,firstName + " " + lastName, dob, address, city + ", " + state + " " + zipcode, username, email])
  } 
  
  //creating callback function in App. This will get data from the Signup child
  //Then pass the callback function in App as prop to Signup
  //Signup calls the function using props

  
  return (
    <div className="App">
      <Signup SubmitButton= {SubmitButton} firstName = {setFirstName} lastName ={setLastName} dob ={setDob} address ={setAddress} city={setCity}  state={setState} zipcode={setZipCode} username={setUserName} email ={setEmail}/>
      <DB  list={userDetails}/>
      
    </div>
  );
}

export default App;
