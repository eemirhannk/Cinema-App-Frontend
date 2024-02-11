import React, { useEffect } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {

  // useEffect(() => {
  //   fetch("https://localhost:7135/WeatherForecast", {
  //     method: "GET",
  //     headers: {},
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  // }, []);
  const navigate = useNavigate();
  return (
    <div id="divPayment" className="d-flex">
      <div className="row m-0 w-100 d-flex justify-content-center align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <div className="paymentForm p-4">
            <h1 className="movieSelectionTitle">Ödeme</h1>
            <form className="d-flex flex-column justify-content-center align-items-center gap-3">
              <div style={{ width: "95%" }} className="d-flex gap-1">
                <input
                  placeholder="XXXX"
                  type="tel"
                  id="cardNumber"
                  inputMode="numeric"
                  name="cardNumber"
                  pattern="[0-9\s]{13,19}"
                  maxLength="4"
                  required
                />
                <input
                  placeholder="XXXX"
                  type="tel"
                  id="cardNumber"
                  inputMode="numeric"
                  name="cardNumber"
                  pattern="[0-9\s]{13,19}"
                  maxLength="4"
                  required
                />
                <input
                  placeholder="XXXX"
                  type="tel"
                  id="cardNumber"
                  inputMode="numeric"
                  name="cardNumber"
                  pattern="[0-9\s]{13,19}"
                  maxLength="4"
                  required
                />
                <input
                  placeholder="XXXX"
                  type="tel"
                  id="cardNumber"
                  inputMode="numeric"
                  name="cardNumber"
                  pattern="[0-9\s]{13,19}"
                  maxLength="4"
                  required
                />
              </div>
              {/* <input
                placeholder="Kart Numaranız"
                type="tel"
                id="cardNumber"
                inputMode="numeric"
                name="cardNumber"
                pattern="[0-9\s]{13,19}"
                maxLength="16"
                required
              /> */}
              <input
                placeholder="Adınız, Soyadınız*"
                type="text"
                id="cardName"
                name="cardName"
                required
              />
              <input
                placeholder="Son Kullanma Tarihi"
                type="month"
                id="cardDate"
                name="cardDate"
                required
              />
              <input
                placeholder="CVC Numarası"
                type="tel"
                id="cardCvc"
                name="cardCvc"
                maxLength="3"
                required
              />
            </form>
          </div>
        </div>
        <div className="col-md-3">
          <div className="confirmationForm p-4">
            <h2 className="movieSelectionTitle text-nowrap w-100">
              Toplam: 130,00 TL
            </h2>
            <div className="checkboxWrapper d-flex flex-column gap-4">

            <label className="d-flex align-items-center justify-content-center gap-3">
              <input type="checkbox" name="onay1" required />
              Ön Bilgilendirme Koşulları’nı ve Mesafeli Satış Sözleşmesi’ni okudum, onaylıyorum.
            </label>
            <label className="d-flex align-items-center justify-content-center gap-3">
              <input type="checkbox" name="onay2" required />
              Self Group mail ve SMS gönderimleri aracılığıyla ön gösterimler, güncel etkinlikler ve kampanyalardan haberdar olmak istiyorum.
            </label>
            </div>
            <button className="confirmButton" type="submit">Onayla</button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      {/* <button onClick={() => navigate("/")}>Ana Menüye Dön</button> */}
    </div>
  );
};

export default Payment;
