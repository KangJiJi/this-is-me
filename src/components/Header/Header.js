import React from 'react';

import './Header.css';

import Logo from '../../atoms/Logo/Logo';

const Header = () => {
  return (
    <div className={`header`}>
      <div className={`header__logo-wrapper`}>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
