import React from 'react';
import {
	Container,
	LatestRevision,
	Intro,
	Heading,
	Wrapper,
} from './PrivacyPolicyElements';

const PrivacyPolicyShow = ({ content, contentDetails }) => {
	return (
		<Container>
			<Wrapper>
				<LatestRevision>{contentDetails.latestRevision}</LatestRevision>
				<Intro>{contentDetails.intro}</Intro>

				{content.map((data) => {
					return (
						<>
							<Heading>{data.heading}</Heading>
							<Intro>{data.description}</Intro>
						</>
					);
				})}
			</Wrapper>
		</Container>
	);
};

export default PrivacyPolicyShow;
