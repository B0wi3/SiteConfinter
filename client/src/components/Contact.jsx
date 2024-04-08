import React, { useState } from "react";
import Axios from "axios";

function Contact() {
  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3000/register", {
      fName: values.fName,
      lName: values.lName,
      email: values.email,
      message: values.message,
    }).then((response)=> {
      // console.log(response)
    })
  };

  return (
    <div id="contact">
      <h1>Fale com a gente</h1>
      <form id="form">
        <div className="form-row">
          <div className="form-element">
            <label for="fname">Primeiro nome</label>
            <input onChange={handleChangeValues} type="text" id="fname" name="fName" />
          </div>
          <div className="form-element">
            <label for="lname">Sobrenome</label>
            <input onChange={handleChangeValues} type="text" id="lname" name="lName" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-element">
            <label for="email">Email</label>
            <input onChange={handleChangeValues} type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-element">
            <label for="message">Mensagem</label>
            <textarea onChange={handleChangeValues} type="text" id="message" name="message" />
          </div>
        </div>
        <input type="submit" value="Enviar" id="submit-form" onClick={() => handleClickButton()} />
      </form>
    </div>
  );
}

export default Contact;
