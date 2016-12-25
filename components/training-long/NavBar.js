import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect fixedTop={true} id="top-nav">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <img src="/static/himagelogo.png" alt="himage logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
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
          <NavItem eventKey={5} href="#partners" onClick={
            () => document.getElementById('partners').scrollIntoView({behavior: 'smooth'})
          }>合作医院</NavItem>
          <NavItem eventKey={6} href="/training-short">短期培训</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
