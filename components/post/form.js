import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';
import Input from '../input';
import { PostForm } from './post.styled';

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
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

      {errors.exampleRequired && <span>This field is required</span>}
      <Button type='submit' text={'Submit'} />
    </PostForm>
  );
}
