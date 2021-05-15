import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './Navbar2Elements';

const Navbar2 = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/" />
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar2;
