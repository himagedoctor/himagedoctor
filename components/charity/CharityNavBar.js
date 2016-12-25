import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
} from 'react-bootstrap';

const CharityNavBar = (props) => {
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
          <li role="presentation"><Link href="/">首页</Link></li>
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CharityNavBar
