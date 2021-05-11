import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
	TestimonialsSection,
	TestimonialsWrapper,
	TestimonialsTitle,
	TestimonialsContainer,
	TestimonialsCard,
	TestimonialsCardInfo,
	QuoteIcon,
	ReviewText,
	UserDetails,
	UserName,
} from './TestimonialElements';

const Testimonials = ({ reviewsData }) => {
	return (
		<>
			<TestimonialsSection>
				<TestimonialsWrapper>
					<TestimonialsTitle>Testimonials</TestimonialsTitle>
					<TestimonialsContainer>
						<Carousel
							width={400}
							autoPlay={true}
							interval={5000}
							showStatus={false}
							infiniteLoop={true}
							showArrows={false}
							showThumbs={false}
						>
							{reviewsData.map((data, index) => {
								return (
									<TestimonialsCard key={index}>
										<QuoteIcon>
											<FaQuoteLeft />
										</QuoteIcon>
										<TestimonialsCardInfo>
											<ReviewText>{data.review}</ReviewText>
											<UserDetails>
												<UserName>{data.name}</UserName>
											</UserDetails>
										</TestimonialsCardInfo>
									</TestimonialsCard>
								);
							})}
						</Carousel>
					</TestimonialsContainer>
				</TestimonialsWrapper>
			</TestimonialsSection>
		</>
	);
};

export default Testimonials;
