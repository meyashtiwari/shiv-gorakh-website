import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { SliderData } from '../data/SliderData';
import { homeObjOne, homeObjTwo } from '../data/InfoData';
import { ServicesData } from '../data/ServicesData';
import { TeamData } from '../data/TeamData';
import { UserReviewsData } from '../data/UserReviewsData';

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
			<Services servicesData={ServicesData} />
			<Team teamData={TeamData} />
			<Testimonials reviewsData={UserReviewsData} />
			<Footer />
		</>
	);
};

export default Home;
