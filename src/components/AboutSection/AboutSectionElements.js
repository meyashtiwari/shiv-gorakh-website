import styled from 'styled-components';

export const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 100%;
	margin: 0 5% 0;
	padding: 5% 0 5% 0;
`;

export const AboutContainer = styled.div`
	background-color: #fafafa;
`;

export const Description = styled.h4`
	white-space: pre-line;
	font-weight: 300;
`;

export const Heading = styled.h2`
	font-weight: 700;
	margin: 2em 0 2em 0;

	&:nth-child(1) {
		margin-top: -4%;
	}
`;
