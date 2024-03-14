import React from "react";

function Card(props) {
  return (
    <div id="card">
      <h1 className="title">{props.title}</h1>
      <p className="text">{props.message}</p>
    </div>
  );
}

export default Card;
