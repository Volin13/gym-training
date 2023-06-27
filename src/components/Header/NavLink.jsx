import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({
  text,
  navLinkClassName,
  scrollFunc,
  closeModal,
  refEl,
}) => {
  return (
    <button
      className={navLinkClassName}
      onClick={() => {
        scrollFunc(refEl);
        closeModal();
      }}
    >
      {text}
    </button>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  navLinkClassName: PropTypes.string,
  scrollFunc: PropTypes.func,
};

export default NavLink;
