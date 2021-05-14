import styled from 'styled-components';
import background from '../../images/background2.svg';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 300px;
	background-image: url(${background});
	justify-content: center;
`;

export const HeroHeading = styled.h1`
	color: #fff;
	align-self: center;
	font-size: 2.5rem;

	@media screen and (max-width: 960px) {
		font-size: 2rem;
	}
`;
