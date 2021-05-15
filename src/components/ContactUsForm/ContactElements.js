import styled from 'styled-components';

export const Heading = styled.h1`
	color: #000d1a;
	margin-top: 20px;
	margin-bottom: 20px;
	align-self: center;
	font-size: 1.8rem;
	text-align: center;

	@media screen and (max-width: 960px) {
		font-size: 1.2rem;
	}
`;

export const Container = styled.div`
	min-height: 692px;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 0;
	overflow: hidden;
	background-color: #fafafa;
`;

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`;

export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;

export const Form = styled.form`
	background: #000d1a;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 2em auto;
	padding: 80px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #fff;
`;

export const FormInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`;

export const FormButton = styled.button`
	background: #ffd462;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #000;
	font-size: 20px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		background: #fff;
	}
`;

export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: #fff;
	font-size: 14px;
`;
