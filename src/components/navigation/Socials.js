import React from 'react';

const Socials = () => {
  return (
    <section className="socials">
      <a
        href="https://www.facebook.com"
        className="link socials__link"
        name="facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://twitter.com/?lang=pl"
        className="link socials__link"
        name="twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/"
        className="link socials__link"
        name="instagram"
      >
        <i className="fab fa-instagram-square"></i>
      </a>
    </section>
  );
};

export default Socials;
