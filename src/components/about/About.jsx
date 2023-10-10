import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='Holmar' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1/2 Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>1 Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>1 Completed</small>
            </article>
          </div>

          <p>
            I am a computer science graduate from Reykjavik University, Iceland.
            About 16 years ago my interest in programming was sparked when I
            started the middle school that journey only lasted for one semester
            and I had to start working full-time to support myself, but ever
            since then I've always been very much interested in programming, but
            it wasn´t until 2018 I decided to get a BSc degree so I could learn
            more from people who are smarter than me.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
