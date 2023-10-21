import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo' aria-label='Holmar Homepage'>
        Holmar
      </a>

      <ul className='permalinks' aria-label='Footer Navigation'>
        <li>
          <a href='#' aria-label='Link to Homepage'>
            Home
          </a>
        </li>
        <li>
          <a href='#about' aria-label='Link to About section'>
            About
          </a>
        </li>
        <li>
          <a href='#experience' aria-label='Link to Experience section'>
            Experience
          </a>
        </li>
        <li>
          <a href='#portfolio' aria-label='Link to Portfolio section'>
            Portfolio
          </a>
        </li>
        <li>
          <a href='#contact' aria-label='Link to Contact section'>
            Contact
          </a>
        </li>
      </ul>

      <div className='footer_socials'>
        <a
          href='https://www.facebook.com/holmijj'
          aria-label='Link to Facebook'>
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
