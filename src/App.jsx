import "./App.css";
import Payment from "./pages/Payment/Payment.js";
import MainPage from "./pages/MainPage/MainPage.js";
import FirstScreen from "./pages/FirstScreen/FirstScreen.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
