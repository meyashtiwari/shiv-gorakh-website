import React from 'react';
import { Button } from '../ButtonElements';

import {
	Column1,
	Column2,
	ImgWrap,
	InfoContainer,
	InfoRow,
	InfoWrapper,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	Img,
} from './InfoElements';

const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
}) => {
	console.log('value ' + primary);
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
