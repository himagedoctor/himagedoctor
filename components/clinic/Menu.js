import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
} from 'react-bootstrap';

export default (props) => {
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
          <NavItem eventKey={2} href="#mission" onClick={
            () => document.getElementById('mission').scrollIntoView({behavior: 'smooth'})
          }>国际门诊使命</NavItem>
          <NavItem eventKey={3} href="#visit" onClick={
            () => document.getElementById('visit').scrollIntoView({behavior: 'smooth'})
          }>就诊模式</NavItem>
          <NavItem eventKey={4} href="#insurance" onClick={
            () => document.getElementById('insurance').scrollIntoView({behavior: 'smooth'})
          }>合作保险</NavItem>
          <NavDropdown eventKey={5} title="更多信息" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/charity">慈善工作</MenuItem>
            <MenuItem eventKey={5.2} href="/training-long">长期全科培训</MenuItem>
            <MenuItem eventKey={5.3} href="/training-short">短期全科培训</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
