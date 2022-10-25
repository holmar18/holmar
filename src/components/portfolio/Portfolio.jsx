import React from 'react';
import './portfolio.css';
import data from './Projects-Data';

const Portfolio = () => {
	console.log(data);
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio_container'>
				{data.map(
					({ id, image, title, github, demo, descrition, yearMade }) => {
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
										<a href={github} className='btn' target='_blank'>
											Github
										</a>
									)}
									{demo && (
										<a href={demo} className='btn btn-primary' target='_blank'>
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
