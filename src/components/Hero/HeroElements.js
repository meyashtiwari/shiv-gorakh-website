import styled, { css } from 'styled-components/macro';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroSection = styled.section`
	height: 100vh;
	max-height: 1100px;
	position: relative;
	overflow: hidden;
`;

export const HeroWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
`;

export const HeroSlide = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
`;

export const HeroSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: '';
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100vh;
		bottom: 0vh;
		left: 0;
		overflow: hidden;
		opacity: 0.4;
		background: linear-gradient(
				100deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
	}
`;

export const HeroImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`;

export const HeroContent = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	max-width: 1600px;
	width: calc(100% - 100px);
	color: #fff;

	h1 {
		font-size: clamp(1rem, 8vw, 2rem);
		font-weight: 700;
		text-transform: uppercase;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		text-align: center;
		margin-bottom: 0.8rem;
		animation: fadeInDown;
		animation-duration: 1.5s;
	}
`;

const arrowButtons = css`
	width: 50px;
	height: 50px;
	color: #fff;
	cursor: pointer;
	background: #000d1a;
	border-radius: 50px;
	padding: 10px;
	margin-right: 1rem;
	user-select: none;
	transition: 0.3s;

	&:hover {
		background: #ffd462;
		transform: scale(1.05);
	}
`;

export const PrevArrow = styled(IoArrowBack)`
	${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
	${arrowButtons}
`;

export const SliderButtons = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50px;
	display: flex;
	z-index: 10;
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
