import React from 'react';
import himagelogo from '../../images/himagelogo.png';

const NavbarHeader = () => (
  <div className="navbar-header page-scroll">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
      <i className="fa fa-bars"></i>
    </button>
    <a className="navbar-brand" href="/">
      <img src={himagelogo} alt="himage logo" />
    </a>
  </div>
);

export default NavbarHeader;
