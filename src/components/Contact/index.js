import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  }

  return (
    <section className='container-fluid'>
      <div className='mx-5 py-2'>
        <h2>Contact me</h2>

        <div className='p-4'>
          <form id='contact-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='form-label'>Name:</label>
            <input type='text' name='name' className='form-control' defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor='email' className='form-label'>Email Address:</label>
            <input type='email' name='email' className='form-control' defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor='message' className='form-label'>Message:</label>
            <textarea name='message' rows='5' className='form-control' defaultValue={message} onBlur={handleChange} />
          </div>

          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}

          <button className='btn-sub' type='submit'>Submit</button>

          </form>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;