import React, { useState } from "react";
import "./MainPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";

const MainPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsLength, setSelectedSeatsLength] = useState(0);

  const navigate = useNavigate();
  function changeColor(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("matris-hucre")) {
      clickedElement.classList.toggle("selected");
      const clickedElementId = clickedElement.id;
      const clickedRowIndex = clickedElement.getAttribute("aria-rowindex");

      const indexToRemove = selectedSeats.findIndex(
        ([rowIndex, seatId]) =>
          rowIndex === clickedRowIndex && seatId === clickedElementId
      );
      if (indexToRemove !== -1) {
        console.log(selectedSeats.splice(indexToRemove, 1));
        selectedSeats.splice(indexToRemove, 1);
        setSelectedSeatsLength(selectedSeats.length);
      } else {
        setSelectedSeats([...selectedSeats, [clickedRowIndex, clickedElementId]]);
        selectedSeats.push([clickedRowIndex, clickedElementId]);
        setSelectedSeatsLength(selectedSeats.length);
      }
    }
    if (clickedElement.classList.contains("matris-hucre double")) {
      clickedElement.classList.toggle("selected");
    }
  }
  console.log(selectedSeats)
  function sendSeatInfo() {

    console.log(selectedSeats);
  }
  return (
    <div id="divMainPage" className="mainContent d-flex flex-column justify-content-evenly align-items-center w-100">
      <div className="row w-100">
        <div className="col-md-2"></div>
        <div className="col-md-8 d-flex justify-content-center">
          {" "}
          <div className="screenDiv">PERDE</div>
        </div>
        <div className="col-md-2 d-flex justify-content-start">
          <Link
            to={"/payment"}
            className={`btn continueButton ${selectedSeatsLength > 0 ? "visible" : ""}`}
            onClick={sendSeatInfo}
          >
            Devam Et
          </Link>
          {/* <button className="sendSeatInfoButton" onClick={sendSeatInfo} >
              DEVAM ET
            </button> */}
        </div>
      </div>
      <div className="seatChooseDiv w-100 d-flex justify-content-center align-items-center p-5">
        <div className="w-100 d-flex justify-content-evenly align-items-center">
          <div className="seatGroups">
            <div className="seat-hucre">A</div>
            <div className="seat-hucre">B</div>
            <div className="seat-hucre">C</div>
            <div className="seat-hucre">D</div>
            <div className="seat-hucre">E</div>
            <div className="seat-hucre">F</div>
            <div className="seat-hucre">G</div>
            <div className="seat-hucre">H</div>
          </div>
          <div className="matris" onClick={changeColor}>
            <div aria-rowindex={"A"} id="1" className="matris-hucre">
              1
            </div>
            <div aria-rowindex={"A"} id="2" className="matris-hucre">
              2
            </div>
            <div
              aria-rowindex={"A"}
              id="3"
              style={{ backgroundColor: "orange" }}
              className="matris-hucre"
            >
              3
            </div>
            <div aria-rowindex={"A"} id="4" className="matris-hucre">
              4
            </div>
            <div aria-rowindex={"A"} id="5" className="matris-hucre">
              5
            </div>
            <div aria-rowindex={"A"} id="6" className="matris-hucre">
              6
            </div>
            <div aria-rowindex={"A"} id="7" className="matris-hucre">
              7
            </div>
            <div aria-rowindex={"A"} id="8" className="matris-hucre">
              8
            </div>
            <div aria-rowindex={"B"} id="9" className="matris-hucre">
              9
            </div>
            <div aria-rowindex={"B"} id="10" className="matris-hucre">
              10
            </div>
            <div aria-rowindex={"B"} id="11" className="matris-hucre">
              11
            </div>
            <div aria-rowindex={"B"} id="12" className="matris-hucre">
              12
            </div>
            <div aria-rowindex={"B"} id="13" className="matris-hucre">
              13
            </div>
            <div aria-rowindex={"B"} id="14" className="matris-hucre">
              14
            </div>
            <div aria-rowindex={"B"} id="15" className="matris-hucre">
              15
            </div>
            <div aria-rowindex={"B"} id="16" className="matris-hucre">
              16
            </div>
            <div aria-rowindex={"C"} id="17" className="matris-hucre">
              17
            </div>
            <div aria-rowindex={"C"} id="18" className="matris-hucre">
              18
            </div>
            <div aria-rowindex={"C"} id="19" className="matris-hucre">
              19
            </div>
            <div aria-rowindex={"C"} id="20" className="matris-hucre">
              20
            </div>
            <div aria-rowindex={"C"} id="21" className="matris-hucre">
              21
            </div>
            <div aria-rowindex={"C"} id="22" className="matris-hucre">
              22
            </div>
            <div aria-rowindex={"C"} id="23" className="matris-hucre">
              23
            </div>
            <div aria-rowindex={"C"} id="24" className="matris-hucre">
              24
            </div>
            <div aria-rowindex={"D"} id="25" className="matris-hucre">
              25
            </div>
            <div aria-rowindex={"D"} id="26" className="matris-hucre">
              26
            </div>
            <div aria-rowindex={"D"} id="27" className="matris-hucre">
              27
            </div>
            <div aria-rowindex={"D"} id="28" className="matris-hucre">
              28
            </div>
            <div aria-rowindex={"D"} id="29" className="matris-hucre">
              29
            </div>
            <div aria-rowindex={"D"} id="30" className="matris-hucre">
              30
            </div>
            <div aria-rowindex={"D"} id="31" className="matris-hucre">
              31
            </div>
            <div aria-rowindex={"D"} id="32" className="matris-hucre">
              32
            </div>
            <div aria-rowindex={"E"} id="33" className="matris-hucre">
              33
            </div>
            <div aria-rowindex={"E"} id="34" className="matris-hucre">
              34
            </div>
            <div aria-rowindex={"E"} id="35" className="matris-hucre">
              35
            </div>
            <div aria-rowindex={"E"} id="36" className="matris-hucre">
              36
            </div>
            <div aria-rowindex={"E"} id="37" className="matris-hucre">
              37
            </div>
            <div aria-rowindex={"E"} id="38" className="matris-hucre">
              38
            </div>
            <div aria-rowindex={"E"} id="39" className="matris-hucre">
              39
            </div>
            <div aria-rowindex={"E"} id="40" className="matris-hucre">
              40
            </div>
            <div aria-rowindex={"F"} id="41" className="matris-hucre">
              41
            </div>
            <div aria-rowindex={"F"} id="42" className="matris-hucre">
              42
            </div>
            <div aria-rowindex={"F"} id="43" className="matris-hucre">
              43
            </div>
            <div aria-rowindex={"F"} id="44" className="matris-hucre">
              44
            </div>
            <div aria-rowindex={"F"} id="45" className="matris-hucre">
              45
            </div>
            <div aria-rowindex={"F"} id="46" className="matris-hucre">
              46
            </div>
            <div aria-rowindex={"F"} id="47" className="matris-hucre">
              47
            </div>
            <div aria-rowindex={"F"} id="48" className="matris-hucre">
              48
            </div>
            <div aria-rowindex={"G"} id="49" className="matris-hucre">
              49
            </div>
            <div aria-rowindex={"G"} id="50" className="matris-hucre">
              50
            </div>
            <div aria-rowindex={"G"} id="51" className="matris-hucre">
              51
            </div>
            <div aria-rowindex={"G"} id="52" className="matris-hucre">
              52
            </div>
            <div aria-rowindex={"G"} id="53" className="matris-hucre">
              53
            </div>
            <div aria-rowindex={"G"} id="54" className="matris-hucre">
              54
            </div>
            <div aria-rowindex={"G"} id="55" className="matris-hucre">
              55
            </div>
            <div aria-rowindex={"G"} id="56" className="matris-hucre">
              56
            </div>
            <div className="matris-hucre double">
              <div aria-rowindex={"H"} id="57">
                57
              </div>
              <div aria-rowindex={"H"} id="58">
                58
              </div>
            </div>
            <div className="matris-hucre double">
              <div aria-rowindex={"H"} id="59">
                59
              </div>
              <div aria-rowindex={"H"} id="60">
                60
              </div>
            </div>
            <div className="matris-hucre double">
              <div aria-rowindex={"H"} id="61">
                61
              </div>
              <div aria-rowindex={"H"} id="62">
                62
              </div>
            </div>
            <div className="matris-hucre double">
              <div aria-rowindex={"H"} id="63">
                63
              </div>
              <div aria-rowindex={"H"} id="64">
                64
              </div>
            </div>
          </div>
          <div className="seatGroups">
            <div className="seat-hucre">A</div>
            <div className="seat-hucre">B</div>
            <div className="seat-hucre">C</div>
            <div className="seat-hucre">D</div>
            <div className="seat-hucre">E</div>
            <div className="seat-hucre">F</div>
            <div className="seat-hucre">G</div>
            <div className="seat-hucre">H</div>
          </div>
        </div>
      </div>
      <div className="seatInfoDiv d-flex">
        <div className="infoWrapper">
          <div
            style={{ backgroundColor: "grey" }}
            className="matris-hucre"
          ></div>
          <p>Dolu Koltuklar</p>
        </div>
        <div className="infoWrapper">
          <div className="matris-hucre"></div>
          <p>Boş Koltuklar</p>
        </div>
        <div className="infoWrapper">
          <div className="matris-hucre double">
            <p></p>
            <p></p>
          </div>
          <p>İkili Koltuklar</p>
        </div>
        <div className="infoWrapper">
          <div
            style={{ backgroundColor: "orange" }}
            className="matris-hucre"
          ></div>
          <p>Engelli Koltuklar</p>
        </div>
        <div className="infoWrapper">
          <div
            style={{ backgroundColor: "tomato" }}
            className="matris-hucre"
          ></div>
          <p>Seçiminiz</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
