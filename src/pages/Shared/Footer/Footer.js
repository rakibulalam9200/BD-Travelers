import React from "react";
import { NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import logo from "../../../images/travel-logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className= "mt-4  pt-5 pb-2 bg-light variant-light text-dark text-center"
       >
        <div className="pb-3">
          <NavLink
            className="mx-3 menu-item travel travel-text px-3"
            to="/home"
          >
            <img src={logo} alt="" /> <span className="px-3">BD Travelers</span>
          </NavLink>
        </div>

        <div className="text-center">
          <h2>
            <a className="text-dark" href="https://www.facebook.com/">
              <i className="fab fa-facebook-square me-3"></i>
            </a>
            <a className="text-dark" href="https://www.youtube.com/">
              <i className="fab fa-youtube-square me-3"></i>
            </a>
            <a className="text-dark" href="https://www.instagram.com/">
              <i className="fab fa-instagram me-3"></i>
            </a>
            <a className="text-dark" href="https://www.twitter.com/">
              <i className="fab fa-twitter-square me-3"></i>
            </a>
          </h2>
        </div>
        <p className="text-center travel-text">
          <small> © BD Travelers, 2021</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
