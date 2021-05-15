import React from 'react';
import {
	ProjectContainer,
	ProjectWrapper,
	Heading,
	Description,
} from './ProjectSectionElements';

const ProjectSection = ({ content }) => {
	return (
		<ProjectContainer>
			<ProjectWrapper>
				{content.map((data) => {
					return (
						<>
							<Heading>{data.heading}</Heading>
							<Description>{data.description}</Description>
						</>
					);
				})}
			</ProjectWrapper>
		</ProjectContainer>
	);
};

export default ProjectSection;
