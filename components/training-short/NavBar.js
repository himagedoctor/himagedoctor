import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
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
          <li role="presentation"><Link href="/training-short/english">English</Link></li>
          <NavItem eventKey={2} href="#course" onClick={
            () => document.getElementById('course').scrollIntoView({behavior: 'smooth'})
          }>短期培训课程介绍</NavItem>
          <NavItem eventKey={3} href="#schedule" onClick={
            () => document.getElementById('schedule').scrollIntoView({behavior: 'smooth'})
          }>课程安排</NavItem>
          <NavItem eventKey={4} href="#application" onClick={
            () => document.getElementById('application').scrollIntoView({behavior: 'smooth'})
          }>报名方式</NavItem>
          <NavDropdown eventKey={5} title="更多信息" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/training-long">全科培训</MenuItem>
            <MenuItem eventKey={5.2} href="/clinic">国际门诊</MenuItem>
            <MenuItem eventKey={5.3} href="/charity">慈善工作</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
