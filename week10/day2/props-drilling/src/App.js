import Dealership from "./components/Dealership/Dealership";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import "./App.css"


function App() {

  const mustang = "1967 Mustang Boss 302";
  const fordgt = "2021 Ford Gt";
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <Neighborhood mustang={mustang}/>
      <Dealership mustang={mustang} fordgt={fordgt}/>
      </div>
  );
}

export default App;
