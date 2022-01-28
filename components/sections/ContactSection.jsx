import { SectionContainer } from '../../styles/containers.styled';
import content from '../../content/no.json';
import { StyledContactSection, ContactForm } from './section.styled';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { BiMailSend } from 'react-icons/bi';

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const recaptchaRef = useRef();

  const [isDisabled, setIsDisabled] = useState(true);

  const validateCaptcha = (response_key) => {
    return new Promise((resolve, reject) => {
      const secret_key = process.env.RECAPTCHA_SECRET_KEY;

      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

      fetch(url, {
        method: 'post',
      })
        .then((response) => response.json())
        .then((google_response) => {
          if (google_response.success == true) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          console.log(err);
          resolve(false);
        });
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (grecaptcha.getResponse() === '') {
      e.preventDefault();
      alert("Please click <I'm not a robot> before sending the job");
      return;
    }

    const inputObj = {};
    const updatedWarningList = [];
    Object.values(e.target).map((inputElement) => {
      const id = inputElement.id;
      const isRequired = inputElement?.required;

      const value = inputElement?.value?.trim();

      if (isRequired) {
        if (value.length) inputObj[id] = value;
        else {
          updatedWarningList.push(id);
        }
      } else {
        if (value?.length) inputObj[id] = value;
      }
    });

    if (updatedWarningList.length) {
      setWarningList(updatedWarningList);
      return;
    } else {
      setIsLoading(true);
      setWarningList([]);
      console.log('submit ', inputObj);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(inputObj),
        });
        console.log(res);
        setIsDone(true);
        recaptchaRef.current.reset();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SectionContainer>
      <StyledContactSection>
        <h1>{content.contact.title}</h1>
        <p>{content.contact.body}</p>

        <h3 className='font'>{content.contact.line1}</h3>
        <h3 className='font'>{content.contact.line2}</h3>
        <h3 className='font'>{content.contact.line3}</h3>

        <h2>{content.contact.email.title}</h2>
        <ContactForm onSubmit={handleSubmit}>
          <input
            required
            name={'email'}
            type='email'
            placeholder='Type your email'
          />
          <input name={'name'} type='text' placeholder='Type your name' />
          <textarea
            required
            name={'body'}
            rows={5}
            placeholder='Your request ...'
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            size='normal'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={validateCaptcha}
          />
          <button disabled={isDisabled} type='submit'>
            {isLoading ? <BiMailSend /> : content.contact.email.cta}
          </button>
        </ContactForm>
      </StyledContactSection>
    </SectionContainer>
  );
}
