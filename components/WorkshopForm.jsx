import content from '../content/no.json';
import styles from '../styles/WorkshopForm.module.css';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useRef } from 'react';
import { BiMailSend } from 'react-icons/bi';
import ReCAPTCHA from 'react-google-recaptcha';

export default function WorkshopForm({ inputs, submitText }) {
  const [startDate, setStartDate] = useState(new Date());
  const [warningList, setWarningList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const recaptchaRef = useRef();

  const renderInputByType = (input) => {
    switch (input.type) {
      case 'text':
        return (
          <input
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
          />
        );
      case 'textarea':
        return (
          <textarea
            rows={10}
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
          />
        );
      case 'select':
        return (
          <select id={input.id}>
            {input.options.map((option) => (
              <option key={option.value} {...option} />
            ))}
          </select>
        );
      case 'date':
        return (
          <DatePicker
            id={input.id}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        );
      default:
        return (
          <input
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
          />
        );
    }
  };

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
      const originalItem = inputs.filter((i) => i.id === id)[0];
      const isRequired = originalItem?.required;
      const isSelect = originalItem?.type === 'select';
      console.log(originalItem);
      const value = inputElement?.value?.trim();

      if (isSelect) {
        console.log('select');
        console.log(inputElement);
      }
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
      console.log('show warning ', updatedWarningList);
      return;
    } else {
      setIsLoading(true);

      setWarningList([]);
      console.log('submit ', inputObj);
      try {
        const res = await fetch('/api/workshops', {
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
  if (isDone) {
    return (
      <div className={styles.DoneBox} style={{ fontSize: 18 }}>
        {content.workshop.workshopForm.receivedMessage}
        <BiMailSend />
      </div>
    );
  } else
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.Container}>
          {inputs.map((input) => {
            return (
              <label
                className={cn(styles.LabelContainer, {
                  [styles.Warning]: warningList.includes(input.id),
                })}
                key={input.id}
                htmlFor={input.id}
              >
                <span>
                  {input.label} {input.required && ' *'}
                </span>
                {renderInputByType(input)}
              </label>
            );
          })}
        </div>
        <p>{content.workshop.workshopForm.requiredFields}</p>
        <ReCAPTCHA
          ref={recaptchaRef}
          size='normal'
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={validateCaptcha}
        />
        <button className={styles.SubmitButton} type='submit'>
          {isLoading ? <BiMailSend /> : submitText}
        </button>
      </form>
    );
}
