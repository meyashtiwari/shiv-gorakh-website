import React from 'react';
import {
	AboutContainer,
	AboutWrapper,
	Heading,
	Description,
} from './AboutSectionElements';

const AboutSection = ({ content }) => {
	return (
		<AboutContainer>
			<AboutWrapper>
				{content.map((data) => {
					return (
						<>
							<Heading>{data.heading}</Heading>
							<Description>{data.description}</Description>
						</>
					);
				})}
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;
