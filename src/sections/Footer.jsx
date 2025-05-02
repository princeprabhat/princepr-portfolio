import React from "react";
import Logo from "../components/Logo";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <Logo />
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" key={img.name} href={img.url}>
              <img src={img.imgPath} alt="icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center items-end">
          <a href="mailto:princeprabhat1996@gmail.com" className="cta-button">
            Connect Via Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
