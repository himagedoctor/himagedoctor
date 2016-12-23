import React from 'react'
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
          <NavItem eventKey={1} href="#intro" onClick={
            () => document.getElementById('intro').scrollIntoView({behavior: 'smooth'})
          }>首页</NavItem>
          <NavItem eventKey={2} href="#about" onClick={
            () => document.getElementById('about').scrollIntoView({behavior: 'smooth'})
          }>关于我们</NavItem>
          <NavItem eventKey={3} href="#team" onClick={
            () => document.getElementById('team').scrollIntoView({behavior: 'smooth'})
          }>团队介绍</NavItem>
          <NavItem eventKey={4} href="/training-long">全科培训</NavItem>
          <NavItem eventKey={5} href="/charity">慈善工作</NavItem>
          <NavItem eventKey={6} href="http://mail.himagedoctor.com">仁美邮箱</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
