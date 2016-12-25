import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

const InmedNavBar = (props) => {
  return (
    <Navbar collapseOnSelect fixedTop={true}>
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
          <li role="presentation"><Link href="/training-short">中文</Link></li>
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default InmedNavBar
