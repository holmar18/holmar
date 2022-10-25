import React from 'react';
import './testimonials.css';
import Clients from './client-reviews';
// Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className='container testimonials_container'
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{Clients.map(({ id, avatar, name, review }) => {
					return (
						<SwiperSlide key={id} className='testimonial'>
							<div className='client_avatar'>
								<img src={avatar} alt='Client one' />
							</div>
							<h5 className='client_name'>{name}</h5>
							<small className='client_review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
