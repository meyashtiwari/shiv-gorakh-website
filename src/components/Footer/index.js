import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
} from 'react-icons/fa';
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
	SocialIconLink,
	LinkA,
	FooterText,
	Icon,
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>CORPORATE OFFICE</FooterLinkTitle>
							<Icon>
								<FaMapMarkerAlt />
								<FooterText>
									A-10, 3rd floor, Main Road, Village Ghazipur, East Delhi
									110096
								</FooterText>
							</Icon>
							<Icon>
								<FaPhoneAlt />
								<LinkA href="tel:+917017371734">+91-7017371734</LinkA>
							</Icon>
							<Icon>
								<FaEnvelope />
								<LinkA href="mailto:sales@shivgorakh.com">
									sales@shivgorakh.com
								</LinkA>
							</Icon>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>USEFUL INFORMATION</FooterLinkTitle>
							<FooterLink to="/signin">About Us</FooterLink>
							<FooterLink to="/sigin">Our Projects</FooterLink>
							<FooterLink to="/signin">Privacy Policy</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>HELP AND SUPPORT</FooterLinkTitle>
							<FooterLink to="/contact">Contact Us</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialIcons>
							<SocialIconLink
								href="https://wa.me/917017371734"
								target="_blank"
								aria-label="Whatsapp"
							>
								<FaWhatsapp />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
						</SocialIcons>
						<WebsiteRights>
							&#169; 2016 - {new Date().getFullYear()} Shiv Gorakh BuildTech
							Private Limited. All rights Reserved.
						</WebsiteRights>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
