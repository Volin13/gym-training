import React, { useState } from 'react';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import Logo from 'components/UI/Logo/Logo';
import css from './Header.module.css';
import NavLink from './NavLink';
import PropTypes from 'prop-types';
import ContactUsModal from 'components/UI/ContactUs/ContactUsModal';

const Header = ({
  scrollFunc,
  classesSectionRef,
  teamSectionRef,
  // aboutUsSectionRef,
  // gallerySectionRef,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={css.header}>
      <Logo />
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
      <MainBtn text="Contact Us" onClickFnc={openModal} />
      <ContactUsModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

Header.propTypes = {
  scrollFunc: PropTypes.func,
};

export default Header;
