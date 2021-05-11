import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper,
	SideBtnWrap,
	SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to="about"
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={0}
					>
						About
					</SidebarLink>
					<SidebarLink
						to="project"
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={0}
					>
						Our Projects
					</SidebarLink>
					<SidebarLink
						to="services"
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-79}
					>
						Why Us?
					</SidebarLink>
					<SidebarLink
						to="team"
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						Our Team
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/contact">Contact Us</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
