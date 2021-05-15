import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ButtonElements';

import {
	HeroSection,
	HeroWrapper,
	HeroSlide,
	HeroSlider,
	HeroImage,
	HeroContent,
	SliderButtons,
	PrevArrow,
	NextArrow,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';

const Hero = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const [hover, setHover] = useState(false);
	const length = slides.length;
	const timeout = useRef(null);

	const onHover = () => {
		setHover(!hover);
	};

	useEffect(() => {
		const nextSlide = () => {
			setCurrent((current) => (current === length - 1 ? 0 : current + 1));
		};

		timeout.current = setTimeout(nextSlide, 6000);

		return function () {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [current, length]);

	const nextSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<HeroSection>
			<HeroWrapper>
				{slides.map((slide, index) => {
					return (
						<HeroSlide key={index}>
							{index === current && (
								<HeroSlider>
									<HeroImage src={slide.image} alt={slide.alt} />
									<HeroContent>
										<h1>{slide.title}</h1>
										<HeroBtnWrapper>
											<Button
												to="/contact"
												onMouseEnter={onHover}
												onMouseLeave={onHover}
											>
												Get in touch {hover ? <ArrowForward /> : <ArrowRight />}
											</Button>
										</HeroBtnWrapper>
									</HeroContent>
								</HeroSlider>
							)}
						</HeroSlide>
					);
				})}
				<SliderButtons>
					<PrevArrow onClick={prevSlide} />
					<NextArrow onClick={nextSlide} />
				</SliderButtons>
			</HeroWrapper>
		</HeroSection>
	);
};

export default Hero;
