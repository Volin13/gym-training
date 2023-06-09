import React, { useState } from 'react';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import Logo from 'components/UI/Logo/Logo';
import css from './Header.module.css';
import NavLink from './NavLink';
import PropTypes from 'prop-types';
import ContactUsModal from 'components/UI/ContactUs/ContactUsModal';
import BurgerMenu from './BurgerMenu';
import { ReactComponent as BurgerIcon } from '../../assets/images/MediaIcons/menu-hamburger-svgrepo-com.svg';

const Header = ({
  scrollFunc,
  classesSectionRef,
  teamSectionRef,
  qASectionRef,
  feedbackSectionRef,
}) => {
  const [contactModalIsOpen, setContactsIsOpen] = useState(false);
  const [burgerModalIsOpen, setBurgerIsOpen] = useState(false);
  function openModal(name) {
    if (name === 'contacts') {
      setContactsIsOpen(true);
      return;
    }
    if (name === 'burger') {
      setBurgerIsOpen(true);
      return;
    }
    return;
  }
  function closeModal(name) {
    if (name === 'contacts') {
      setContactsIsOpen(false);
      return;
    }
    if (name === 'burger') {
      setBurgerIsOpen(false);
      return;
    }
    setContactsIsOpen(false);
    setBurgerIsOpen(false);
    return;
  }
  return (
    <div className={css.header}>
      <Logo />
      <div className={css.navSection}>
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
                text="Feedback"
                scrollFunc={scrollFunc}
                refEl={feedbackSectionRef}
              />
            </li>
            <li className={css.header__navItem}>
              <NavLink
                navLinkClassName={css.header__navLink}
                text="Q &#38; A"
                scrollFunc={scrollFunc}
                closeModal={closeModal}
                refEl={qASectionRef}
              />
            </li>
          </ul>
        </nav>
        <MainBtn
          text="Contact Us"
          onClickFnc={() => openModal('contacts')}
        />
        <ContactUsModal
          modalIsOpen={contactModalIsOpen}
          closeModal={closeModal}
        />
      </div>
      <div className={css.burgerSection}>
        <button
          type="button"
          onClick={() => openModal('burger')}
          className={css.header__burgerBtn}
        >
          <BurgerIcon />
        </button>

        <BurgerMenu
          scrollFunc={scrollFunc}
          classesSectionRef={classesSectionRef}
          teamSectionRef={teamSectionRef}
          qASectionRef={qASectionRef}
          feedbackSectionRef={feedbackSectionRef}
          contactModalIsOpen={contactModalIsOpen}
          burgerModalIsOpen={burgerModalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  scrollFunc: PropTypes.func,
};

export default Header;
