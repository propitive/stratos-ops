import { useState } from "react";
import { Link } from "react-router-dom";
import linkedinIcon from "../../images/icons/iconLinkedin.svg";
import linkedIconHovered from "../../images/icons/iconLinkedinHovered.svg";
import emailIcon from "../../images/icons/iconEmail.svg";
import emailIconHovered from "../../images/icons/iconMailHovered.svg";

function Footer() {
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isMailHovered, setIsMailHovered] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <p className="footer__text">Home</p>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Services</p>
          </Link>
          <Link
            to="/contact-form"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">About Us</p>
          </Link>
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Contact Us</p>
          </Link>
          <div className="footer__icons">
            <a
              href="https://www.linkedin.com/company/stratosoperations"
              target="_blank"
              rel="noreferrer"
              className="footer__linkedin"
            >
              <img
                className="footer__linkedin"
                src={isLinkedinHovered ? linkedIconHovered : linkedinIcon}
                alt="Linkedin Icon"
                onMouseEnter={() => setIsLinkedinHovered(true)}
                onMouseLeave={() => setIsLinkedinHovered(false)}
              ></img>
            </a>
            <a
              href="mailto:jmaldonado@stratosops.com"
              target="_blank"
              rel="noreferrer"
              className="footer__email"
            >
              <img
                className="footer__email"
                src={isMailHovered ? emailIconHovered : emailIcon}
                alt="Email Icon"
                onMouseEnter={() => setIsMailHovered(true)}
                onMouseLeave={() => setIsMailHovered(false)}
              ></img>
            </a>
          </div>
        </div>
        <div className="footer__column">
          <Link
            to="/menu/pizza"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Security Consulting and Hardening</p>
          </Link>
          <Link
            to="/menu/appetizer"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Cloud Migration and Implementations</p>
          </Link>
          <Link
            to="/menu/salad"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">CI/CD Processes</p>
          </Link>
          <Link
            to="/menu/dessert"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Backup and Recovery</p>
          </Link>
          <Link
            to="/menu/pasta"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text"></p>
          </Link>
        </div>
        <div className="footer__column">
          <Link
            to="/contact-form"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Contact</p>
          </Link>
        </div>
        <p className="footer__author">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/jose-m-maldonado/"
            target="_blank"
            rel="noreferrer"
            className="footer__author-a"
          >
            Jose Maldonado
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
