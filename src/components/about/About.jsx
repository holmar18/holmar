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
              <small>1 Years Working</small>
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
            I am a Computer Science graduate from Reykjavik University, Iceland,
            where my profound interest in programming was initially ignited
            approximately 16 years ago during a brief yet influential stint in
            high school. Unfortunately, due to circumstances, I had to embark on
            full-time employment to sustain myself, halting my educational
            pursuits temporarily. Despite this setback, my passion for
            programming persisted, eventually culminating in my decision to
            pursue a Bachelor of Science degree in 2018. This academic endeavor
            not only provided me with a structured learning environment but also
            allowed me to glean insights from intellectually superior
            individuals.
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
