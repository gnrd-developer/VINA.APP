import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import Client from "./components/client";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Client />}>
        <Route path="" element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App
