import React from 'react';
import Button from 'components/UI/Button/Button';
import Logo from 'components/UI/Logo/Logo';
import css from './Header.module.css';
import NavLink from './NavLink';

const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <nav>
        <ul className={css.header__navList}>
          <li className={css.header__navItem}>
            <NavLink navLinkClassName={css.header__navLink} text="Classes" />
          </li>
          <li className={css.header__navItem}>
            <NavLink navLinkClassName={css.header__navLink} text="Team" />
          </li>
          <li className={css.header__navItem}>
            <NavLink navLinkClassName={css.header__navLink} text="About Us" />
          </li>
          <li className={css.header__navItem}>
            <NavLink navLinkClassName={css.header__navLink} text="Gallery" />
          </li>
        </ul>
      </nav>
      <Button text="Contact Us" mainBtn />
    </div>
  );
};
export default Header;
