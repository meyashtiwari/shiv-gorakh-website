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
import { Slide } from 'react-awesome-reveal';

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
			<Slide triggerOnce duration={1500} fraction={0.2}>
				<InfoSection {...homeObjOne} />
			</Slide>
			<Slide direction="right" triggerOnce duration={1500}>
				<InfoSection {...homeObjTwo} />
			</Slide>
			<Slide direction="up" triggerOnce duration={1500}>
				<Services servicesData={ServicesData} />
			</Slide>
			<Slide direction="up" triggerOnce duration={1500}>
				<Team teamData={TeamData} />
			</Slide>
			<Testimonials reviewsData={UserReviewsData} />
			<Footer />
		</>
	);
};

export default Home;
