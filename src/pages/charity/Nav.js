import React, { PropTypes } from 'react'
import NavbarHeader from '../shared/NavbarHeader'

const Nav = (props) => {
  return (
    <nav className="navbar navbar-custom navbar-home navbar-fixed-top" role="navigation">
     <div className="container">
        <NavbarHeader />
        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/">首页</a></li>
            <li><a href="#mainland">国内慈善活动</a></li>
            <li><a href="#foreign">国外慈善活动</a></li>
            <li><a href="#contact">联系方式</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">更多信息<b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="/clinic">国际门诊</a></li>
                <li><a href="/training-long">长期全科培训</a></li>
                <li><a href="/training-short">短期全科培训</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
