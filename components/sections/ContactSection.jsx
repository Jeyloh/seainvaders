import { SectionContainer } from '../../styles/containers.styled';
import content from '../../content/no.json';
import { StyledContactSection, ContactForm } from './section.styled';
import { useState } from 'react';

export default function ContactSection() {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SectionContainer>
      <StyledContactSection>
        <h1>{content.contact.title}</h1>
        <p>{content.contact.body}</p>

        <h3 className='font'>{content.contact.line1}</h3>
        <h3 className='font'>{content.contact.line2}</h3>

        <h2>{content.contact.email.title}</h2>
        <ContactForm onSubmit={handleSubmit}>
          <input name={'email'} type='email' placeholder='email' />
          <textarea name={'body'} rows={5} placeholder='text' />
          <button disabled={isDisabled} type={'submit'}>
            {content.contact.email.cta}
          </button>
        </ContactForm>
      </StyledContactSection>
    </SectionContainer>
  );
}
