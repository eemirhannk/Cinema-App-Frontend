import React, { useEffect, useState } from "react";
import "./FirstScreen.css";
import { Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
const FirstScreen = () => {

  const [movies, setMovies] = useState([]);
  // Örnek film verileri

  useEffect(() => {
    fetch("https://localhost:44361/api/Movies/GetAllMovies")
      .then((response) => response.json())
      .then((data) => setMovies(data.data));
      console.log(movies)

  }, []);
  const films = [
    {
      id: 1,
      title: "Film 1",
      photo: "https://picsum.photos/200",
      releaseDate: "02.02.2024",
      time: "2 sa 15 dk",
      type: "Gerilim",
    },
    {
      id: 2,
      title: "Film 2",
      photo: "https://picsum.photos/300",
      releaseDate: "30.01.2024",
      time: "1 sa 30 dk",
      type: "Komedi",
    },
    {
      id: 3,
      title: "Film 3",
      photo: "https://picsum.photos/400",
      releaseDate: "22.01.2024",
      time: "3 sa 05 dk",
      type: "Aksiyon",
    },
  ];

  const [selectedMovie, setselectedMovie] = useState(null);

  // Tarih ve saat verileri
  const dateOptions = ["09 Şubat Cuma", "10 Şubat Cumartesi", "11 Şubat Pazar"];
  const timeOptions = ["13:00", "16:00", "19:00"];

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Burada seçilen tarihe göre saatleri güncelleyebilirsiniz.
  };
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    // Burada seçilen tarihe göre saatleri güncelleyebilirsiniz.
  };

  return (
    <div
      id="divFirstScreen"
      className="row m-0 d-flex align-items-center justify-content-center gap-4"
    >
      <Link
      to={"/mainpage"}
        className={`btn continueButton ${
          selectedDate && selectedTime ? "visible" : ""
        }`}
      >
        Devam Et
      </Link>
      <div className="col-md-4 movieSelectionDiv">
        <h2 className="movieSelectionTitle w-25">Film Seçimi</h2>
        <ul className="movieListDiv">
          {films.map((film) => (
            <li
              className="movieCardDiv"
              key={film.id}
              onClick={() => setselectedMovie(film)}
            >
              <div className="wrapper">
                <img
                  className="moviePhotoDiv"
                  src={film.photo}
                  alt={film.title}
                />
                <p className="movieStreamingDate">
                  Vizyon Tarihi <br></br> {film.releaseDate}
                </p>
              </div>
              <div className="movieInfoDiv">
                <p>{film.title}</p>
                <p>{film.time}</p>
                <p>{film.type}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedMovie && (
        <div className="col-md-4 movieSelectionDiv">
          <h2 className="movieSelectionTitle w-50">Tarih ve Seans Seçimi</h2>
          {/* <p>Seçilen Film: {selectedMovie.title}</p> */}

          <div>
            <div className="dateOptionsContainer">
              {dateOptions.map((date) => (
                <span
                  key={date}
                  className={`dateOption ${
                    selectedDate === date ? "selected" : ""
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                </span>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div>
              <div className="timeOptionsContainer">
                {timeOptions.map((time) => (
                  <span
                    key={time}
                    className={`timeOption ${
                      selectedTime === time ? "selected" : ""
                    }`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FirstScreen;
