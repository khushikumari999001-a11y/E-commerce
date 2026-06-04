import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
   const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    e.target.reset(); // form clear
  };
  return (
    <div className ='contact'>
      <h3>Contact Us</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your name . . . . ' name='name' required />
        <input type='email' placeholder='Enter your email . . . . ' name='email' required />
        <textarea name='message' placeholder='Enter your message . . . . ' rows='5' cols='70' required></textarea>
        <button type='submit'>Submit</button>
      </form>

      {submitted && (
        <p className="success-msg">
          ✅ Thank you! Your message has been submitted.
        </p>
      )}

    </div>
  )
}

export default Contact
