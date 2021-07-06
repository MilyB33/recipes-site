import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>How to find us</h1>
      <div className="map"></div>
      <p className="contact__description">
        Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio,
        gravida at, cursus nec, luctus a, lorem. Maecenas tristique
        orci ac sem. Duis ultricies pharetra magna. Donec accumsan
        malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit
        amet, consectetuer adipiscing elit.
      </p>
      <div className="contact__info">
        <div className="contact__info__item">
          <i className="fas fa-home"></i>
          <div>
            <p>3235 Farm Meadow Drive</p>
            <p>Nashville</p>
          </div>
        </div>
        <div className="contact__info__item">
          <i className="fas fa-phone"></i>
          <div>
            <p>931-233-5070</p>
            <p>615-456-9993</p>
          </div>
        </div>
        <div className="contact__info__item">
          <i className="fas fa-envelope"></i>
          <p>b87yb3657fp@temporary-mail.net</p>
        </div>
      </div>
      <form className="contact__form">
        <h2>Contact form</h2>
        <div className="contact__form__grid">
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="contact__input"
          />
          <input
            type="phone"
            placeholder="Phone"
            className="contact__input"
          />
          <textarea
            placeholder="Message"
            className="contact__message contact__input"
          />

          <button type="submit" className="button button--contact">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
