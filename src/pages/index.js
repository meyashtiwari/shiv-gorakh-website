import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import { SliderData } from '../data/SliderData';
import { homeObjOne, homeObjThree, homeObjTwo } from '../data/InfoData';
import { ServicesData } from '../data/ServicesData';
import Footer from '../components/Footer';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Hero slides={SliderData} />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
			<Services servicesData={ServicesData} />
			<Footer />
		</>
	);
};

export default Home;
