import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import {Helmet} from "react-helmet";

const Header = () => {
  return (
    <header>
      <Helmet>
        <title>My portfolio</title>
        <meta
          name='description'
          content='Hólmar Karl&atos;s Full Stack Developer portfolio'
        />
      </Helmet>

      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Hólmar Karl</h1>
        <h5 className='text-light'>Full stack Developer</h5>
        <CTA aria-label='Call to action' />
        <HeaderSocials />

        <div className='me'>
          <img
            src={ME}
            alt='Portrait of Hólmar Karl'
            aria-label='Hólmar Karl Portrait'
          />
        </div>

        <a
          href='#contact'
          className='scroll_down'
          aria-label='Scroll down to contact section'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
