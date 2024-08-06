import {Routes,Route} from "react-router-dom"
import Client from "./components/primary/Client";
import Home from "./components/primary/Home";
import "./app.css";
function App() {
  return (
  <Routes>
    <Route path="/" element={<Client/>} >
      <Route path="" element={<Home/>}/>
    </Route>
  </Routes>
  );
}

export default App;
