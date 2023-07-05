import Logo from 'components/UI/Logo/Logo';
import { SocialMediaLinks } from 'components/UI/SocialMediaLinks/SocialMediaLinks';
import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
      <Logo logoFormattingClass={css.footer__logoFormatting} />
      <p className={css.footer__legend}>
        Join us today and experience the transformative power of our
        fitness classes. Don't wait to start your fitness journey.
        Take the first step towards a healthier, stronger you. Let's
        sweat, have fun, and make fitness a way of life together!
      </p>
      <div style={{ marginBottom: '40px' }}>
        <SocialMediaLinks />
      </div>
      <hr className={css.footer__horizontalLine} />
      <span className={css.footer__credits}>
        &#169; SPYRO 2023. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
