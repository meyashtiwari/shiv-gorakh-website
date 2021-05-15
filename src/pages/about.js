import React from 'react';
import Navbar2 from '../components/Navbar2';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { AboutData } from '../data/AboutData';

const AboutPage = () => {
	return (
		<>
			<Navbar2 />
			<HeroSection heading="About Company" />
			<AboutSection content={AboutData} />
			<Footer />
		</>
	);
};

export default AboutPage;
