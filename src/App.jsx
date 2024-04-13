import "./App.css";
import { useState } from "react";
import Payment from "./pages/Payment/Payment.js";
import MainPage from "./pages/MainPage/MainPage.js";
import Login from "./pages/Login/Login.js";
import FirstScreen from "./pages/FirstScreen/FirstScreen.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
function App() {

  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <>
    <Navbar/>
    <h1 className="selfCinema">SELF CINEMA</h1>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage sendDataToParent={handleDataFromChild}/>} />
        <Route path="/payment" element={<Payment dataFromChild={dataFromChild}/>} />
      </Routes>
    </>
  );
}

export default App;
