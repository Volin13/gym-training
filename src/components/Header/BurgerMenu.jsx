import React from 'react';
import css from './BurgerMenu.module.css';
import NavLink from './NavLink';
import { ReactComponent as CloseIcon } from '../../assets/images/MediaIcons/menu-hamburger-svgrepo-com.svg';
import Logo from '../UI/Logo/Logo';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import ContactUsModal from 'components/UI/ContactUs/ContactUsModal';

const BurgerMenu = ({
  contactModalIsOpen,
  burgerModalIsOpen,
  closeModal,
  teamSectionRef,
  openModal,
  scrollFunc,
  classesSectionRef,
}) => {
  return (
    <Modal
      // shouldCloseOnOverlayClick={true}
      isOpen={burgerModalIsOpen}
      ariaHideApp={false}
      contentLabel="header navigation"
      preventScroll={true}
      onRequestClose={closeModal}
      className={css.header_modal}
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
        <nav>
          <ul className={css.header__navList}>
            <li className={css.header__navItem}>
              <NavLink
                navLinkClassName={css.header__navLink}
                text="Classes"
                scrollFunc={scrollFunc}
                refEl={classesSectionRef}
              />
            </li>
            <li className={css.header__navItem}>
              <NavLink
                navLinkClassName={css.header__navLink}
                text="Team"
                scrollFunc={scrollFunc}
                refEl={teamSectionRef}
              />
            </li>
            <li className={css.header__navItem}>
              <NavLink
                navLinkClassName={css.header__navLink}
                text="About Us"
                scrollFunc={scrollFunc}
                // refEl={aboutUsSectionRef}
              />
            </li>
            <li className={css.header__navItem}>
              <NavLink
                navLinkClassName={css.header__navLink}
                text="Gallery"
                scrollFunc={scrollFunc}
                // refEl={gallerySectionRef}
              />
            </li>
          </ul>
        </nav>
        <div className={css.header__navButton}>
          <MainBtn text="Contact Us" onClickFnc={openModal} />
        </div>
        <ContactUsModal
          modalIsOpen={contactModalIsOpen}
          closeModal={closeModal}
        />
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
BurgerMenu.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

export default BurgerMenu;
