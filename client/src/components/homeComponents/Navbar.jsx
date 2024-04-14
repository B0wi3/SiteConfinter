import React from "react";

function Navbar() {
  return (
    <div id="navbar">
      <a href="index.js">
        <img
          src="../../assets/logo_p.jpeg"
          alt="logo"
          style={{ height: "40px", margin: "10px 0 10px 30px" }}
        />
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
