import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactUsForm from '../components/ContactUsForm';
import Navbar2 from '../components/Navbar2';

const ContactPage = () => {
	return (
		<>
			<Navbar2 />
			<HeroSection heading="Contact Us" />
			<ContactUsForm />
			<Footer />
		</>
	);
};

export default ContactPage;
