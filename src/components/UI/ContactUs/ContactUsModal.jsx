import React from 'react';
import css from './ContactUsModal.module.css';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../../assets/images/MediaIcons/close-svgrepo-com.svg';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';

const ContactUsModal = ({ modalIsOpen, closeModal }) => {
  const apiKey = process.env.REACT_APP_REST_API_KEY;
  const mapStyles = {
    width: '260px',
    border: '1px solid #ff4601',
    borderRadius: '5px',
  };

  const defaultCenter = {
    lat: 48.678689,
    lng: 26.586623,
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      contentLabel="Contact Us Section"
      preventScroll={true}
      onRequestClose={closeModal}
      className={css.freeTrialModal_modal}
      overlayClassName={css.freeTrialModal__overlay}
    >
      <div className={css.freeTrialModal_modalContent}>
        <button
          type="button"
          onClick={closeModal}
          className={css.freeTrialModal_closeBtn}
        >
          <CloseIcon />
        </button>
        <Logo logoFormattingClass={css.freeTrialModal_logo} />

        <div className={css.content_format}>
          <div style={{ width: '400px', heigh: '100%' }}>
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
                  <a
                    href="https://goo.gl/maps/CPtrU1FHBa2aNyZL9"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Вул. Соборна 4, Кам'янець-Подільський, 32300
                  </a>
                </li>
                <li>
                  <a href="mailto:https://volin13.github.io/gym-training/">
                    SPYRO-GYM.com
                  </a>
                </li>
                <li>
                  <a href="tel:+380961111111">+380961111111</a>
                </li>
              </ul>
            </address>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
      <div className={css.freeTrialModal_container}>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemFirst}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemSecond}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemThird}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemFourth}`}
        ></div>
        <div className={css.freeTrialModal__imageBackground}></div>
      </div>
    </Modal>
  );
};

ContactUsModal.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

export default ContactUsModal;
