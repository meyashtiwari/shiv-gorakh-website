import styled from 'styled-components';
import backgroundImg from '../../images/background.svg';

export const TestimonialsSection = styled.div`
	padding: 50px 0 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url(${backgroundImg});
`;

export const TestimonialsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const TestimonialsTitle = styled.h1`
	color: #000d1a;
	margin-bottom: 64px;
	align-self: center;
	font-size: 2.5rem;

	@media screen and (max-width: 960px) {
		font-size: 2rem;
	}
`;

export const TestimonialsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;

export const TestimonialsCard = styled.div`
	background: #000d1a;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 400px;
	height: 320px;
	text-decoration: none;
	border-radius: 4px;

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;

export const TestimonialsCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	height: 300px;
	padding: 24px;
	align-items: center;
	color: #fff;
`;

export const QuoteIcon = styled.div`
	position: absolute;
	top: 13px;
	left: 17px;
	color: #ffd462;
	font-size: 37px;
`;

export const UserDetails = styled.div`
	display: flex;
	align-items: center;
`;

export const UserName = styled.span`
	font-size: 15px;
	color: #fff;
`;

export const ReviewText = styled.p`
	font-size: 17px;
	color: #ffd462;
	font-weight: normal;
	display: flex;
	justify-content: center;
	margin: 2em;
`;
