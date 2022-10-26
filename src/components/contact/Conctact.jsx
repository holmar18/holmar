import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
// hooks
import { useContactForm } from '../../hooks/useContactForm';

const Conctact = () => {
	const { handleInput, handleSubmit, values, errors } = useContactForm();

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
					{errors.nameErr && (
						<label style={{ fontSize: '0.9rem', color: '#d91818' }}>
							<h4>{errors.errMsg}</h4>
						</label>
					)}
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
						value={values.name || ''}
						onChange={(e) => handleInput('name', e.target.value)}
						style={errors.nameErr ? { border: '0.2rem solid #d91818' } : null}
					/>
					{errors.emailErr && (
						<label style={{ fontSize: '0.9rem', color: '#d91818' }}>
							<h4>{errors.errMsg}</h4>
						</label>
					)}
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						required
						value={values.email || ''}
						onChange={(e) => handleInput('email', e.target.value)}
						style={errors.emailErr ? { border: '0.2rem solid #d91818' } : null}
					/>
					{errors.msgErr && (
						<label style={{ fontSize: '0.9rem', color: '#d91818' }}>
							<h4>{errors.errMsg}</h4>
						</label>
					)}
					<textarea
						name='messsage'
						rows='7'
						placeholder='Your message'
						required
						value={values.msg || ''}
						onChange={(e) => handleInput('msg', e.target.value)}
						style={errors.msgErr ? { border: '0.2rem solid #d91818' } : null}
					></textarea>
					<button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Conctact;
