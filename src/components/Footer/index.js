import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
	SocialIcons,
	SocialLogo,
	SocialIconLink,
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>CORPORATE OFFICE</FooterLinkTitle>
							<FooterLink to="/signin">
								A-10, 3rd floor, Main Road, Village Ghazipur, East Delhi 110096
							</FooterLink>
							<FooterLink to="/sigin">+91-7017371734</FooterLink>
							<FooterLink to="/signin">sales@shivgorakh.com</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>USEFUL INFORMATION</FooterLinkTitle>
							<FooterLink to="/signin">Our Vision</FooterLink>
							<FooterLink to="/sigin">Why Choose Us</FooterLink>
							<FooterLink to="/signin">Privacy Policy</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>HELP AND SUPPORT</FooterLinkTitle>
							<FooterLink to="/signin">Contact Us</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">ShivGorakh</SocialLogo>
						<WebsiteRights>
							&#169; {new Date().getFullYear()} SHIV GORAKH BUILDTECH PVT LTD.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
