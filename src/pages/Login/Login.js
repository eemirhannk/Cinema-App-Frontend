import React from "react";
import { useState } from "react";
import "./Login.css";

const Practice = () => {
  const [isRegistering, setRegistering] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const buttonSwitcher = () => {
    if(isRegistering){
    setRegistering(!isRegistering);
    }
    else{
      setRegistering(!isRegistering);
    }
  };

  const login = () => {
    if(!isRegistering){
      fetch("https://localhost:44385/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
        console.log("login")

    }
    else{
      fetch("https://localhost:44385/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          userName: username,
          email: mail,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
        console.log("register")
    }
  };
  return (
    <>
      <div
        id="divLogin"
        className="d-flex justify-content-center align-items-center"
      >
        <div className={`book d-flex ${isRegistering ? "registering" : ""}`}>
          <div className="leftSide w-50">
            <h2 className="loginHeader w-100">
              {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
            </h2>
            <div className="d-flex flex-column gap-3 w-100 px-5">
              <input
                type="text"
                placeholder="İsminiz"
                className={`loginInput d-${isRegistering ? "" : "none"}`}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Soyadınız"
                className={`loginInput d-${isRegistering ? "" : "none"}`}
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Kullanıcı Adınız"
                className="loginInput"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email Adresiniz"
                className={`loginInput d-${isRegistering ? "" : "none"}`}
                onChange={(e) => setMail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Şifreniz"
                className="loginInput"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h4 className="loginSubHeader">
              {isRegistering
                ? "Zaten bir hesabınız var mı? Giriş yapın."
                : "Şifremi unuttum?"}
            </h4>
            <button className="btn leftSideButton" onClick={login}>
              {isRegistering ? "KAYIT OL" : "GİRİŞ YAP"}
            </button>
          </div>
          <div style={{ color: "white" }} className="rightSide w-50">
            <h2 className="loginHeader">Merhaba!</h2>
            <h4 className="loginSubHeader">
              Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın
            </h4>
            <button className="rightSideButton" onClick={buttonSwitcher}>
              {isRegistering ? "GİRİŞ YAP" : "KAYIT OL"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practice;
