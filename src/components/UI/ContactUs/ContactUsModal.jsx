import React from 'react';
import css from './ContactUsModal.module.css';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { ReactComponent as LocationIcon } from '../../../assets/images/MediaIcons/location-pin-svgrepo-com.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/MediaIcons/phone-call-svgrepo-com.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/MediaIcons/mail.svg';
import ContactUsForm from './ContactUsForm';
import ModalEl from '../ModalEl/ModalEl';

const ContactUsModal = ({ modalIsOpen, closeModal }) => {
  const apiKey = process.env.REACT_APP_REST_API_KEY;
  const defaultCenter = {
    lat: 48.678689,
    lng: 26.586623,
  };
  const mapStyles = {
    width: '100%',
    height: '356px',
    border: '1px solid #ff4601',
    borderRadius: '5px',
  };

  return (
    <ModalEl
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      label="Contact Us Section"
    >
      <div className={css.freeTrialModal_modalContent}>
        <div className={css.content_format}>
          <div
            style={{ width: '356px', heigh: '80%' }}
            className={css.map}
          >
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className={css.addressSection}>
            <address>
              <ul className={css.addressList}>
                <li>
                  <div className={css.addressIcon}>
                    <LocationIcon />
                  </div>
                  <a
                    href="https://goo.gl/maps/CPtrU1FHBa2aNyZL9"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    St. Soborna 4, Kamianets-Podilskyi{' '}
                  </a>
                </li>
                <li>
                  <div className={css.addressIcon}>
                    <MailIcon />
                  </div>
                  <a href="mailto:https://volin13.github.io/gym-training/">
                    SPYRO-GYM.com
                  </a>
                </li>
                <li>
                  <div className={css.addressIcon}>
                    <PhoneIcon />
                  </div>
                  <a href="tel:+380961111111">+380961111111</a>
                </li>
              </ul>
            </address>
            <div style={{ marginBottom: '15px' }}>
              <ContactUsForm />
            </div>
          </div>
        </div>
        <div style={{ width: '300px' }}>
          <SocialMediaLinks />
        </div>
      </div>
    </ModalEl>
  );
};

ContactUsModal.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

export default ContactUsModal;
