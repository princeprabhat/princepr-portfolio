import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import Logo from "./Logo";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* <a className="logo" href="#hero">
          <img src="/images/logos/logoNameIcon.png" alt="logoIcon" width={60} />
        </a> */}
        <Logo />
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => {
              return (
                <li className="group" key={name}>
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
