
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import AddNewAcc from "./components/AddNewAcc";
import Home from "./components/Home";

function App() {
  

  return (

    
    <>
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/AddNew" element={<AddNewAcc/>} />
      </Routes>
      
     
    </>
  );
}

export default App;
