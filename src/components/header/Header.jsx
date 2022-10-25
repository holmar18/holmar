import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/cartoon-1.png';
import HeaderSocials from './HeaderSocials';
import { Helmet } from 'react-helmet';

const Header = () => {
	return (
		<header>
			<Helmet>
				<title>My portfolio</title>
				<meta name='Holmar portfolio' content='Fullstack developer portfolio' />
			</Helmet>

			<div className='container header_container'>
				<h5>Hello I'm</h5>
				<h1>Hólmar Karl</h1>
				<h5 className='text-light'>Fullstack Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<a href='#contact' className='scroll_down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
