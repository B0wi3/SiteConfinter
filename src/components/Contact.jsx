import React from "react";

function Contact() {
  return (
    <div id="contact">
      <form>
        <div className="form-name">
          <label for="fname">Primeiro nome</label>
          <input type="text" id="fname" />
          <label for="lname">Sobrenome</label>
          <input type="text" id="lname" />
        </div>
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="message">Mensagem</label>
        <input type="text" id="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
