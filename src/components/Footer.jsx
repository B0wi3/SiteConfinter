import React from "react";

const customStyle = {
  height: "30px",
  width: "30px",
};

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img
          style={customStyle}
          src="https://www.svgrepo.com/show/521711/instagram.svg"
          alt="insta"
        />
        <img
          style={customStyle}
          src="https://www.svgrepo.com/show/521923/whatsapp.svg"
          alt="whats"
        />
      </div>
    </div>
  );
}

export default Footer;
