import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>Fale com a gente</h1>
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
  );
}

export default Contact;
