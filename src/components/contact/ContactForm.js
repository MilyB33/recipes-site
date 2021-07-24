import React from 'react';

const ContactForm = () => {
  return (
    <form className="contact__form">
      <h2>Contact form</h2>
      <div className="contact__form__grid">
        <input
          type="text"
          placeholder="Name"
          className="contact__input"
          name="name"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="contact__input"
          name="email"
        />
        <input
          type="phone"
          placeholder="Phone"
          className="contact__input"
          name="phone"
        />
        <textarea
          placeholder="Message"
          className="contact__message contact__input"
          name="message"
        />

        <button type="submit" className="button button--contact">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
