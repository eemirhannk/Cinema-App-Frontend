import React from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
  return (
    <>
      <nav className="d-flex align-items-center justify-content-between">
        <div className="content" id="seans">
        <div className={`rounded-box ${location.pathname === "/" ? "active" : ""}`}>1</div>
          <h2>Seans Seç</h2>
        </div>

        <div className="content" id="bilet">
        <div className={`rounded-box ${location.pathname === "/mainpage" ? "active" : ""}`}>2</div>
          <h2>Bilet Tipi</h2>
        </div>

        <div className="content" id="koltuk">
        <div className={`rounded-box ${location.pathname === "/mainpage" ? "active" : ""}`}>3</div>
          <h2>Koltuk Seçimi</h2>
        </div>

        <div className="content" id="odeme">
        <div className={`rounded-box ${location.pathname === "/confirmation" ? "active" : ""}`}>4</div>
          <h2>Ödeme</h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
