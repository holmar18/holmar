import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Conctact = () => {
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact_container'>
				<div className='contact_options'>
					<article className='contact_option'>
						<MdOutlineEmail className='contact_option-icon' />
						<h4>Email</h4>
						<h5>holmarkh@gmail.com</h5>
						<a href='mailto:holmarkh@gmail.com'>Send a message</a>
					</article>

					<article className='contact_option'>
						<RiMessengerLine className='contact_option-icon' />
						<h4>Messenger</h4>
						<h5>holmarkarl</h5>
						<a href='https://www.facebook.com/holmijj'>Send a message</a>
					</article>

					{/* <article className='contact_option'>
						<BsWhatsapp className='contact_option-icon' />
						<h4>WhatsApp</h4>
						<h5>+123456789</h5>
						<a href='https://api.whatsapp.com/send?phone=123456789'>
							Send a message
						</a>
					</article> */}
				</div>
				{/* END OF CONTACT OPTIONS */}
				{/* SEND EMAIL DIRECTLY FROM JS : https://youtu.be/G-Cr00UYokU?t=10881 */}
				<form action=''>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='messsage'
						rows='7'
						placeholder='Your message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Conctact;
