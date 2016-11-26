import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
} from 'react-bootstrap';

import himagelogo from '../../images/himagelogo.png';

const NavBar = (props) => {
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
          <NavItem eventKey={2} href="#" onClick={
            () => document.getElementById('mission').scrollIntoView({behavior: 'smooth'})
          }>国际门诊使命</NavItem>
          <NavItem eventKey={3} href="#" onClick={
            () => document.getElementById('visit').scrollIntoView({behavior: 'smooth'})
          }>就诊模式</NavItem>
          <NavItem eventKey={4} href="#" onClick={
            () => document.getElementById('insurance').scrollIntoView({behavior: 'smooth'})
          }>合作保险</NavItem>
          <NavDropdown eventKey={5} title="更多信息" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/charity">慈善工作</MenuItem>
            <MenuItem eventKey={5.2} href="/training-long">长期全科培训</MenuItem>
            <MenuItem eventKey={5.3} href="/training-short">短期全科培训</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  )
}

export default NavBar
