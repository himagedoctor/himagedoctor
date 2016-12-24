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
          <NavItem eventKey={1} href="#intro" onClick={
            () => document.getElementById('intro').scrollIntoView({behavior: 'smooth'})
          }>首页</NavItem>
          <NavItem eventKey={2} href="#about" onClick={
            () => document.getElementById('about').scrollIntoView({behavior: 'smooth'})
          }>关于我们</NavItem>
          <NavItem eventKey={3} href="#team" onClick={
            () => document.getElementById('team').scrollIntoView({behavior: 'smooth'})
          }>团队介绍</NavItem>
          <li role="presentation"><Link href="/training-long">全科培训</Link></li>
          <li role="presentation"><Link href="/charity">慈善工作</Link></li>
          <li role="presentation"><Link href="/clinic">国际门诊</Link></li>
          <li role="presentation"><Link href="/http://mail.himagedoctor.com">仁美邮箱</Link></li>
          {/*
          <NavItem eventKey={4}><Link href="/training-long">全科培训</Link></NavItem>
          <NavItem eventKey={5}><Link href="/charity">慈善工作</Link></NavItem>
          <NavItem eventKey={6}><Link href="http://mail.himagedoctor.com">仁美邮箱</Link></NavItem>
            */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
