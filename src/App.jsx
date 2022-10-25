import React from 'react';
import Header from '../src/components/header/Header';
import Nav from '../src/components/nav/Nav';
import About from '../src/components/about/About';
import Experiance from '../src/components/experiance/Experiance';
import Services from '../src/components/services/Services';
import Portfolio from '../src/components/portfolio/Portfolio';
import Testimonials from '../src/components/testimonials/Testimonials';
import Contact from '../src/components/contact/Conctact';
import Footer from '../src/components/footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experiance />
			{/* <Services /> */}
			<Portfolio />
			{/* <Testimonials /> */}
			<Contact />
			<Footer />
		</>
	);
};

export default App;
