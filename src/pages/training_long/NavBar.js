import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
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
          <NavItem eventKey={2} href="#intro" onClick={
            () => document.getElementById('intro').scrollIntoView({behavior: 'smooth'})
          }>全科培训</NavItem>
          <NavItem eventKey={3} href="#faculty" onClick={
            () => document.getElementById('faculty').scrollIntoView({behavior: 'smooth'})
          }>师资介绍</NavItem>
          <NavItem eventKey={4} href="#students" onClick={
            () => document.getElementById('students').scrollIntoView({behavior: 'smooth'})
          }>学生介绍</NavItem>
          <NavItem eventKey={4} href="#partners" onClick={
            () => document.getElementById('partners').scrollIntoView({behavior: 'smooth'})
          }>合作医院</NavItem>
          <NavItem eventKey={1} href="/training-short">短期培训</NavItem>
        </Nav>
      </div>
    </Navbar>
  )
}

export default NavBar
