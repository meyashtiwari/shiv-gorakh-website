import React from 'react';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements';

const Services = ({ servicesData }) => {
	return (
		<>
			<ServicesContainer id="services">
				<ServicesH1>Why choose us?</ServicesH1>
				<ServicesWrapper>
					{servicesData.map((data, index) => {
						return (
							<ServicesCard key={index}>
								<ServicesIcon src={data.icon} />
								<ServicesH2>{data.heading}</ServicesH2>
								<ServicesP>{data.description}</ServicesP>
							</ServicesCard>
						);
					})}
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};

export default Services;
