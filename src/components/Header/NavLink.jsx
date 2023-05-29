import React from 'react';

const NavLink = ({ text, navLinkClassName }) => {
  return <button className={navLinkClassName}>{text}</button>;
};
export default NavLink;
