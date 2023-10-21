import React from "react";
import "./experiance.css";
import {BsPatchCheckFill} from "react-icons/bs";
const Experiance = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details' aria-label='HTML'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='CSS'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='JavaScript'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='React Native'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React Native</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='React'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details' aria-label='MongoDB'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='Node'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='MySQL'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='Python'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className='experience_details' aria-label='C#'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>C#</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
