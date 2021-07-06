import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <p>
            Feito com <span>🤍</span> por Joseane Guedes 🧑‍💻
          </p>
          <p> Aluna Reprograma! Em transição de carreira!</p>
          <p>Vamos reprogramar o mundo </p>
          <p> Redes Sociais </p>
        </div>

        <div className="redes-sociais">
          <a
            className="link_insta"
            href="https://www.instagram.com/josie_codes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo_insta"
              src="https://img.pngio.com/download-logo-instagram-free-png-transparent-image-and-clipart-transparent-instagram-logo-png-400_400.png"
              alt="logo instagram"
            />{" "}
          </a>

          <a
            className="link_insta"
            href="https://www.linkedin.com/in/joseane-guedes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className="logo_linke"
              src="https://image.flaticon.com/icons/png/512/49/49656.png"
              alt="logo linkedin"
            />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
