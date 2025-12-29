import { useEffect } from "react";
import { navbarAnimation } from "../animations/navbar";
import "./Header.css";

function Header() {
  useEffect(() => {
    navbarAnimation();
  }, []);

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo"></div>

      {/* NAV */}
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#quote" className="nav-btn">Request Quote</a>
      </nav>
    </header>
  );
}

export default Header;
