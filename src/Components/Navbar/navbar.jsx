import React, { useState } from "react";
import "./navbar.css";
import "./navbar.scss";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar activeNavbar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#logo-flex" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#navLink" className="navLink">
                Home
              </a>
            </li>

            <li className="navItems">
              <a href="#navLink" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItems">
              <a href="#navLink" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItems">
              <a href="#navLink" className="navLink">
                About
              </a>
            </li>

            <li className="navItems">
              <a href="#navLink" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItems">
              <a href="#navLink" className="navLink">
                News
              </a>
            </li>

            <li className="navItems">
              <a href="#navLink" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#btn">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
