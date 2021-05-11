import styled from 'styled-components';

export const TeamSection = styled.div`
	padding: 100px 0 160px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #fafafa;
`;

export const TeamWrapper = styled.div`
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

export const TeamHeading = styled.h1`
	color: #000d1a;
	margin-bottom: 64px;
	align-self: center;
	font-size: 2.5rem;

	@media screen and (max-width: 960px) {
		font-size: 2rem;
	}
`;

export const TeamContainer = styled.div`
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

export const TeamContainerCard = styled.div`
	background: #ffd462;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	height: 320px;
	text-decoration: none;
	border-radius: 4px;

	&:nth-child(2) {
		transform: scale(1.05);
		background: #000d1a;
		margin: 0 24px;

		@media screen and (max-width: 960px) {
			transform: scale(1);
			margin: 24px;
		}
	}

	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
		color: #1c2237;
		cursor: pointer;

		@media screen and (max-width: 960px) {
			transform: none;
		}
	}

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;

export const TeamContainerCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
	padding: 24px;
	align-items: center;
	color: #fff;
`;

export const TeamIcon = styled.img`
	margin: 24px 0;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	border: 5px solid #fff;
`;

export const TeamName = styled.h3`
	margin-bottom: 5px;
	font-size: 25px;

	&:nth-child(2) {
		@media screen and (max-width: 960px) {
			font-size: 20px;
		}
	}
`;

export const TeamPosition = styled.h4`
	font-size: 20px;
`;
