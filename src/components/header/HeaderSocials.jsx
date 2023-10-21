import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a
        href='https://www.linkedin.com/in/h%C3%B3lmar-karl-h%C3%B3lmarsson-105566211/'
        target='_blank'
        rel='noreferrer'
        aria-label='linkedIn profile'>
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/holmar18'
        target='_blank'
        rel='noreferrer'
        aria-label='Gihub profile'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
