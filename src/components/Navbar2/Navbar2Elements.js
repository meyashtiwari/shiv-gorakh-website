import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const Nav = styled.nav`
	background: #000d1a;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
	color: #fff;
`;

export const NavLogo = styled(LinkR)`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 0px;
	background-image: url(${logo});
	width: 286px;
	height: 73px;
`;
