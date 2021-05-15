import React from 'react';
import Navbar2 from '../components/Navbar2';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { ProjectsData } from '../data/ProjectsData';
import ProjectSection from '../components/ProjectSection';

const ProjectsPage = () => {
	return (
		<>
			<Navbar2 />
			<HeroSection heading="Our Projects" />
			<ProjectSection content={ProjectsData} />
			<Footer />
		</>
	);
};

export default ProjectsPage;
