import './App.css';
import Confirmation from './pages/Confirmation/Confirmation.js';
import MainPage from "./pages/MainPage/MainPage.js"
import {Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Routes>
        <Route path="/Confirm" element={<Confirmation />} />
        <Route path="/" element={<MainPage />} />
    </Routes>
    </>
  );
}

export default App;
