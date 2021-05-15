import React from 'react';
import {
	Container,
	FormButton,
	FormContent,
	FormInput,
	FormLabel,
	FormWrap,
	Form,
	Heading,
} from './ContactElements';

const ContactUsForm = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Heading>
						Share your details and we will contact you within 2 working days
					</Heading>
					<FormContent>
						<Form action="#">
							<FormLabel htmlFor="for">Your name</FormLabel>
							<FormInput type="text" required />
							<FormLabel htmlFor="for">Your phone number</FormLabel>
							<FormInput type="tel" required />
							<FormLabel htmlFor="for">E-mail</FormLabel>
							<FormInput type="email" required />
							<FormButton type="submit">Continue</FormButton>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default ContactUsForm;
