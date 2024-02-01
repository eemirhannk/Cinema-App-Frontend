import React, { useState } from 'react';
import './FirstScreen.css';
const FirstScreen = () => {
  // Örnek film verileri
  const films = [
    { id: 1, title: 'Film 1', photo: 'https://picsum.photos/200' ,releaseDate : "02.02.2024" , time: '2 sa 15 dk' , type: 'Gerilim'},
    { id: 2, title: 'Film 2', photo: 'https://picsum.photos/300' ,releaseDate : "30.01.2024" ,time: '1 sa 30 dk' , type: 'Komedi'},
    { id: 3, title: 'Film 3' , photo: 'https://picsum.photos/400' ,releaseDate : "22.01.2024" ,time: '3 sa 05 dk' , type: 'Aksiyon'},
  ];

  const [selectedMovie, setselectedMovie] = useState(null);

  // Tarih ve saat verileri
  const dateOptions = ['2024-03-01', '2024-03-02', '2024-03-03'];
  const timeOptions = ['13:00', '16:00', '19:00'];

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div id='divFirstScreen' className='row m-0 d-flex align-items-center justify-content-center gap-4'>
      <div className='col-md-4 movieSelectionDiv'>
        <h2 className='movieSelectionTitle w-25'>Film Seçimi</h2>
        <ul className='movieListDiv'>
          {films.map((film) => (
            <li className='movieCardDiv' key={film.id} onClick={() => setselectedMovie(film)}>
                <div className='wrapper'>
                <img className='moviePhotoDiv' src={film.photo} alt={film.title} />
                <p className='movieStreamingDate'>Vizyon Tarihi <br></br> {film.releaseDate}</p>
              </div>
              <div className='movieInfoDiv'>
              <p>{film.title}</p>
              <p>{film.time}</p>
              <p>{film.type}</p>

              </div>
              
            </li>
          ))}
        </ul>
      </div>

      {selectedMovie && (
        <div className='col-md-4 movieSelectionDiv'>
          <h2 className='movieSelectionTitle w-25'>Seans Seçimi</h2>
          <p>Seçilen Film: {selectedMovie.title}</p>

          <label htmlFor="date">Tarih Seçimi:</label>
          <select
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="">Tarih Seçiniz</option>
            {dateOptions.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>

          <label htmlFor="time">Saat Seçimi:</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Saat Seçiniz</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default FirstScreen;
