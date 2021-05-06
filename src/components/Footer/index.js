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
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/sigin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/sigin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/sigin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/sigin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Terms of Service</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">ShivGorakh</SocialLogo>
						<WebsiteRights>
							SHIV GORAKH BUILDTECH PRIVATE LIMITED &#169;{' '}
							{new Date().getFullYear()} | All rights reserved.
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
