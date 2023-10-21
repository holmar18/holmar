import "./portfolio.css";

// Google analytics
import {analyticsClickEvent} from "../../analytics/analytics";

const Portfolio = ({projectsHeader, projectsSubHeader, projectsData}) => {
  return (
    <section id='portfolio'>
      <h5>{projectsHeader}</h5>
      <h2>{projectsSubHeader}</h2>

      <div className='container portfolio_container'>
        {projectsData.map(
          ({id, image, title, github, demo, descrition, yearMade, video}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className='portfolio-date'>{yearMade}</p>
                <p className='portfolio-item-description'>{descrition}</p>
                <div className='portfolio_item-cta'>
                  {video && (
                    <a
                      href={video}
                      rel='noreferrer'
                      className='btn btn-primary'
                      onClick={() => {
                        analyticsClickEvent(
                          "Projects",
                          "Project video",
                          "clicked",
                          title
                        );
                      }}>
                      Video
                    </a>
                  )}

                  {github && !video && (
                    <a
                      href={github}
                      rel='noreferrer'
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
                  {demo && !video && (
                    <a
                      href={demo}
                      rel='noreferrer'
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
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
