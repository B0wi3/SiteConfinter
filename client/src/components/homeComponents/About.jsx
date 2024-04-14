import React, { useState } from "react";
import cardInfo from "./cardInfo";

function About() {
  const [currentCard, setCurrentCard] = useState("btn2");
  
  function handleClick(btnKey) {
    setCurrentCard(btnKey);
  }

  const { title, message } = cardInfo[currentCard];

  return (
    <div id="about-frame">
      <div id="about">
        <h1 id="title">QUEM SOMOS NÓS</h1>
        <div id="buttons">
          <button className="btn" onClick={() => handleClick("btn1")}>
            Missão
          </button>
          <button className="btn" onClick={() => handleClick("btn2")}>
            Visão
          </button>
          <button className="btn" onClick={() => handleClick("btn3")}>
            Valores
          </button>
        </div>
        <div id="card">
          <h1 className="title">{title}</h1>
          <p className="text">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
