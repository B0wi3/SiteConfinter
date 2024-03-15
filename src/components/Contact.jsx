import React from "react";

const customStyle = {
  position: "relative",
  zIndex: "1",
  bottom: "250px",
  left: "378px",
  fontFamily: "Montserrat, sans-serif",
  display: "inline-block",
};

function Contact() {
  return (
    <div>
      <h1 style={customStyle}>Fale com a gente</h1>
      <div id="contact">
        <form id="form">
          <div className="form-row">
            <div className="form-element">
              <label for="fname">Primeiro nome</label>
              <input type="text" id="fname" />
            </div>
            <div className="form-element">
              <label for="lname">Sobrenome</label>
              <input type="text" id="lname" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-element">
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-element">
              <label for="message">Mensagem</label>
              <textarea type="text" id="message" />
            </div>
          </div>
          <input type="submit" value="Enviar" id="submit-form" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
