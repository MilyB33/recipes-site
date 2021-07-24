import React from 'react';
import Map from './Map';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <main className="container container--contact">
      <h1>How to find us</h1>
      <Map />
      <ContactInfo />
      <ContactForm />
    </main>
  );
};

export default Contact;
