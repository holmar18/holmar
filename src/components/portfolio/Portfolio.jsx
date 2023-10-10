import React from "react";
import "./portfolio.css";
import data from "../../constants/Projects-Data-school";
// Google analytics
import {analyticsClickEvent} from "../../analytics/analytics";

const Portfolio = ({header, subheader, data}) => {
  return (
    <section id='portfolio'>
      <h5>{header}</h5>
      <h2>{subheader}</h2>

      <div className='container portfolio_container'>
        {data.map(({id, image, title, github, demo, descrition, yearMade}) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p className='portfolio-date'>{yearMade}</p>
              <p className='portfolio-item-description'>{descrition}</p>
              <div className='portfolio_item-cta'>
                {github && (
                  <a
                    href={github}
                    className='btn'
                    target='_blank'
                    onClick={() =>
                      analyticsClickEvent(
                        "Projects",
                        "Project github",
                        "clicked",
                        title
                      )
                    }>
                    Github
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    className='btn btn-primary'
                    target='_blank'
                    onClick={() =>
                      analyticsClickEvent(
                        "Projects",
                        "Project live Demo",
                        "clicked",
                        title
                      )
                    }>
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
