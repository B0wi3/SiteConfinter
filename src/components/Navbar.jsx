import React from "react";

function Navbar() {
  return (
    <div id="navbar">
      <a href="index.js">
        <p className="navElement" style={{ marginLeft: "50px" }}>
          CONFINTER
        </p>
      </a>
      <p className="navElement">SOBRE NÓS</p>
      <p className="navElement">SERVIÇOS</p>
      <p className="navElement" style={{ marginRight: "50px" }}>
        CONTATO
      </p>
    </div>
  );
}

export default Navbar;
