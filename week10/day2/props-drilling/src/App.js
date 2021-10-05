import Dealership from "./components/Dealership/Dealership";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import "./App.css"


function App() {
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <Neighborhood/>
      <Dealership/>
      </div>
  );
}

export default App;
