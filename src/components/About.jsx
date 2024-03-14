import React from "react";
import cardInfo from "../cardInfo";
import Card from "../Card";

function createCard(info) {
  return <Card title={info.title} message={info.message} />;
}

function About() {
  return (
    <div id="about-frame">
      <div id="about">
        <h1 id="title" style={{ marginBottom: "20px" }}>
          QUEM SOMOS NÓS
        </h1>
        <div id="buttons">
          <button className="btn">Missão</button>
          <button className="btn">Visão</button>
          <button className="btn">Valores</button>
        </div>
        {cardInfo.map(createCard)}
      </div>
      <div id="img-container">
        <img
          className="img-about"
          src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.webp"
          alt="about-complement"
        />
      </div>
    </div>
  );
}

export default About;
