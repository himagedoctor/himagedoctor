import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
} from 'react-bootstrap';

import himagelogo from '../../images/himagelogo.png';

const CharityNavBar = (props) => {
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
          <NavItem eventKey={1} href="/">首页</NavItem>
          <NavItem eventKey={2} href="#mainland" onClick={
            () => document.getElementById('mainland').scrollIntoView({behavior: 'smooth'})
          }>国内慈善活动</NavItem>
          <NavItem eventKey={3} href="#foreign" onClick={
            () => document.getElementById('foreign').scrollIntoView({behavior: 'smooth'})
          }>国外慈善活动</NavItem>
          <NavItem eventKey={4} href="#contact" onClick={
            () => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
          }>联系方式</NavItem>
          <NavDropdown eventKey={5} title="更多信息" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/clinic">国际门诊</MenuItem>
            <MenuItem eventKey={5.2} href="/training-long">长期全科培训</MenuItem>
            <MenuItem eventKey={5.3} href="/training-short">短期全科培训</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  )
}

export default CharityNavBar