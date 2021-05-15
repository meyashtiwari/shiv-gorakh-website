import React from 'react';
import { HeroContainer, HeroHeading } from './HeroSectionElements';

const HeroSection = ({ heading }) => {
	return (
		<HeroContainer>
			<HeroHeading>{heading}</HeroHeading>
		</HeroContainer>
	);
};

export default HeroSection;
