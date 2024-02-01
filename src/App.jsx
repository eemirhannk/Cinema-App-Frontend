import "./App.css";
import Confirmation from "./pages/Confirmation/Confirmation.js";
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
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
