import React from 'react';
import {
	TeamSection,
	TeamWrapper,
	TeamHeading,
	TeamContainer,
	TeamContainerCard,
	TeamContainerCardInfo,
	TeamName,
	TeamPosition,
	TeamIcon,
} from './TeamElements';

const Team = ({ teamData }) => {
	return (
		<div id="team">
			<TeamSection>
				<TeamWrapper>
					<TeamHeading>Our Team</TeamHeading>
					<TeamContainer>
						{teamData.map((data, index) => {
							return (
								<TeamContainerCard key={index}>
									<TeamContainerCardInfo>
										<TeamIcon src={data.image} />
										<TeamName>{data.name}</TeamName>
										<TeamPosition>{data.position}</TeamPosition>
									</TeamContainerCardInfo>
								</TeamContainerCard>
							);
						})}
					</TeamContainer>
				</TeamWrapper>
			</TeamSection>
		</div>
	);
};

export default Team;
