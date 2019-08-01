import React from 'react';

const Header = () => (
  <div className="header">
    <div className="mylogo">
      <a className="header-link" href="index.html">
        <img className="mainLogo" src="https://image.flaticon.com/icons/svg/83/83900.svg" alt="main-logo" /></a>
    </div>
    <div className="links">
      <a className="header-link" href="index.html#skills">My skills</a>
      <a className="header-link" href="index.html#references">References</a>
    </div>
  </div>
);

export default Header;
