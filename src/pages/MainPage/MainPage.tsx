import React from "react";
import "./MainPage.css";

function MainPage() {
  function changeColor(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("matris-hucre")) {
      clickedElement.classList.toggle("red");
    }
  }
  return (
    <>
      <div className="mainContent d-flex flex-column justify-content-center align-items-center w-100">
        <div className="seatChooseDiv w-100 d-flex justify-content-evenly align-items-center p-5">
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
            <div className="matris-hucre">1</div>
            <div className="matris-hucre">2</div>
            <div style={{backgroundColor:"orange"}} className="matris-hucre">3</div>
            <div className="matris-hucre">4</div>
            <div className="matris-hucre">5</div>
            <div className="matris-hucre">6</div>
            <div className="matris-hucre">7</div>
            <div className="matris-hucre">8</div>
            <div className="matris-hucre">9</div>
            <div className="matris-hucre">10</div>
            <div className="matris-hucre">11</div>
            <div className="matris-hucre">12</div>
            <div className="matris-hucre">13</div>
            <div className="matris-hucre">14</div>
            <div className="matris-hucre">15</div>
            <div className="matris-hucre">16</div>
            <div className="matris-hucre">17</div>
            <div className="matris-hucre">18</div>
            <div className="matris-hucre">19</div>
            <div className="matris-hucre">20</div>
            <div className="matris-hucre">21</div>
            <div className="matris-hucre">22</div>
            <div className="matris-hucre">23</div>
            <div className="matris-hucre">24</div>
            <div className="matris-hucre">25</div>
            <div className="matris-hucre">26</div>
            <div className="matris-hucre">27</div>
            <div className="matris-hucre">28</div>
            <div className="matris-hucre">29</div>
            <div className="matris-hucre">30</div>
            <div className="matris-hucre">31</div>
            <div className="matris-hucre">32</div>
            <div className="matris-hucre">33</div>
            <div className="matris-hucre">34</div>
            <div className="matris-hucre">35</div>
            <div className="matris-hucre">36</div>
            <div className="matris-hucre">37</div>
            <div className="matris-hucre">38</div>
            <div className="matris-hucre">39</div>
            <div className="matris-hucre">40</div>
            <div className="matris-hucre">41</div>
            <div className="matris-hucre">42</div>
            <div className="matris-hucre">43</div>
            <div className="matris-hucre">44</div>
            <div className="matris-hucre">45</div>
            <div className="matris-hucre">46</div>
            <div className="matris-hucre">47</div>
            <div className="matris-hucre">48</div>
            <div className="matris-hucre">49</div>
            <div className="matris-hucre">50</div>
            <div className="matris-hucre">51</div>
            <div className="matris-hucre">52</div>
            <div className="matris-hucre">53</div>
            <div className="matris-hucre">54</div>
            <div className="matris-hucre">55</div>
            <div className="matris-hucre">56</div>
            <div className="matris-hucre">57</div>
            <div className="matris-hucre">58</div>
            <div className="matris-hucre">59</div>
            <div className="matris-hucre">50</div>
            <div className="matris-hucre">61</div>
            <div className="matris-hucre">62</div>
            <div className="matris-hucre">63</div>
            <div className="matris-hucre">64</div>
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
        <div className="seatInfoDiv d-flex gap-4">
          <div className="infoWrapper">
            <div style={{backgroundColor:"grey"}} className="matris-hucre"></div>
            <p>Dolu Koltuklar</p>
          </div>
          <div className="infoWrapper">
            <div className="matris-hucre"></div>
            <p>Boş Koltuklar</p>
          </div>
          <div className="infoWrapper">
            <div className="matris-hucre"></div>
            <p>İkili Koltuklar</p>
          </div>
          <div className="infoWrapper">
            <div style={{backgroundColor:"orange"}} className="matris-hucre"></div>
            <p>Engelli Koltuklar</p>
          </div>
          <div className="infoWrapper">
            <div style={{backgroundColor:"tomato"}} className="matris-hucre"></div>
            <p>Seçiminiz</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
