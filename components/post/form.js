import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';
import Input from '../input';
import { PostForm } from './post.styled';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const recaptchaRef = useRef();

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
            setIsDisabled(false);
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

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    if (grecaptcha.getResponse() === '') {
      e.preventDefault();
      alert("Please click <I'm not a robot> before sending the message");
      return;
    }

    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    );
  }

  return (
    <PostForm
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg'
      disabled
    >
      <h3>Write a comment:</h3>
      <input ref={register} type='hidden' name='_id' value={_id} />
      <Input
        name={'name'}
        ref={register({ required: true })}
        placeholder={'Type your name'}
        label={'Name'}
        required={true}
      />
      <Input
        name={'email'}
        ref={register({ required: true })}
        placeholder={'your@email.com'}
        label={'Email'}
        required={true}
        type={'email'}
      />
      <Input
        name={'comment'}
        ref={register({ required: true })}
        placeholder={'Write your comment to the article'}
        label={'Comment'}
        required={true}
        type={'textarea'}
      />
      <br />
      <ReCAPTCHA
        ref={recaptchaRef}
        size='normal'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={validateCaptcha}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <Button type='submit' text={'Submit'} />
    </PostForm>
  );
}
