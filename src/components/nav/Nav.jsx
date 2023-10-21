import React, {useState} from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {BiMessageSquareDetail} from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        aria-label='Home Navigation'>
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label='About Navigation'>
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label='Experience Navigation'>
        <BiBook />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label='Contact Navigation'>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
