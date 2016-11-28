import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import himagelogo from '../../images/himagelogo.png';

const InmedNavBar = (props) => {
  return (
    <Navbar bsStyle="custom" fixedTop={true} className="navbar-home" id="top-nav" role="navigation">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <img src={himagelogo} alt="himage logo" />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
        <Nav>
          <NavItem eventKey={1} href="/training-short">中文</NavItem>
          <NavItem eventKey={2} href="#course" onClick={
            () => document.getElementById('course').scrollIntoView({behavior: 'smooth'})
          }>INMED Training</NavItem>
          <NavItem eventKey={3} href="#schedule" onClick={
            () => document.getElementById('schedule').scrollIntoView({behavior: 'smooth'})
          }>Syllabus</NavItem>
          <NavItem eventKey={4} href="#application" onClick={
            () => document.getElementById('application').scrollIntoView({behavior: 'smooth'})
          }>Contact</NavItem>
          <NavDropdown eventKey={5} title="more" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/training-long">Family Practice Training</MenuItem>
            <MenuItem eventKey={5.2} href="/clinic">Clinic</MenuItem>
            <MenuItem eventKey={5.3} href="/charity">Charity</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  )
}

export default InmedNavBar
