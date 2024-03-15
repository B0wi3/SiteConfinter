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
        <h1 id="title">QUEM SOMOS NÓS</h1>
        <div id="buttons">
          <button className="btn">Missão</button>
          <button className="btn">Visão</button>
          <button className="btn">Valores</button>
        </div>
        {cardInfo.map(createCard)}
      </div>
    </div>
  );
}

export default About;
