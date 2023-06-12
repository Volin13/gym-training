import React from 'react';

const NavLink = ({ text, navLinkClassName, scrollFunc, refEl }) => {
  return (
    <button className={navLinkClassName} onClick={scrollFunc(refEl)}>
      {text}
    </button>
  );
};
export default NavLink;
