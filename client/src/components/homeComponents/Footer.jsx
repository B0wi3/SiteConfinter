import React from "react";

const customStyle = {
  height: "30px",
  width: "30px",
  backgroundColor: "#000",
};

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img
          style={customStyle}
          src="https://www.svgrepo.com/show/343562/instagram-social-media-network-communication-interaction-connection.svg"
          alt="insta"
        />
        <img
          style={customStyle}
          src="https://www.svgrepo.com/show/158412/whatsapp.svg"
          alt="whats"
        />
      </div>
    </div>
  );
}

export default Footer;
