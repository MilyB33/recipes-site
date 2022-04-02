import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <p className="contact__description">
        Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio,
        gravida at, cursus nec, luctus a, lorem. Maecenas tristique
        orci ac sem. Duis ultricies pharetra magna. Donec accumsan
        malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit
        amet, consectetuer adipiscing elit.
      </p>
      <section className="contact__info">
        <section className="contact__info__item">
          <i className="fas fa-home"></i>
          <div>
            <p>3235 Farm Meadow Drive</p>
            <p>Nashville</p>
          </div>
        </section>
        <section className="contact__info__item">
          <i className="fas fa-phone"></i>
          <div>
            <p>931-233-5070</p>
            <p>615-456-9993</p>
          </div>
        </section>
        <section className="contact__info__item">
          <i className="fas fa-envelope"></i>
          <p>b87yb3657fp@temporary-mail.net</p>
        </section>
      </section>
    </>
  );
};

export default ContactInfo;
