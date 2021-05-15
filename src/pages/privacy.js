import React from 'react';
import Navbar2 from '../components/Navbar2';
import HeroSection from '../components/HeroSection';
import PrivacyPolicyShow from '../components/PrivacyPolicyShow';
import Footer from '../components/Footer';
import { PrivacyPolicyContent, PrivacyPolicy } from '../data/PrivacyPolicy';

const PrivacyPage = () => {
	return (
		<>
			<Navbar2 />
			<HeroSection heading="Privacy Policy" />
			<PrivacyPolicyShow
				content={PrivacyPolicyContent}
				contentDetails={PrivacyPolicy}
			/>
			<Footer />
		</>
	);
};

export default PrivacyPage;
