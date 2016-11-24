import React from 'react';
import {NavbarHeader} from './NavbarHeader';
//? require vs import
require('smoothscroll-polyfill').polyfill();

//TODO: be responsive
/*
          <li><a href="/training-long">全科培训</a></li>
          <li><a href="/charity">慈善工作</a></li>
          <li><a href="/clinic">国际门诊</a></li>
          */
export const HomeMenu = () => (
  <nav className="navbar navbar-custom navbar-home navbar-fixed-top" role="navigation" id="top-nav">
    <div className="container">
      <NavbarHeader />
      <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
        <ul className="nav navbar-nav">
          <li>
            <a style={{cursor: 'pointer'}} onClick={
              () => document.getElementById('intro').scrollIntoView({behavior: 'smooth'})
            }>首页</a>
          </li>
          <li>
            <a style={{cursor: 'pointer'}} onClick={
              () => document.getElementById('about').scrollIntoView({behavior: 'smooth'})
            }>关于我们</a>
          </li>
          <li>
            <a style={{cursor: 'pointer'}} onClick={
              () => document.getElementById('team').scrollIntoView({behavior: 'smooth'})
            }>团队介绍</a>
          </li>
          <li><a href="http://mail.himagedoctor.com">仁美邮箱</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
