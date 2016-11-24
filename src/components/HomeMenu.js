import React from 'react';
import {NavbarHeader} from './NavbarHeader';

//TODO: be responsive
//onClick={() => document.getElementById('team').scrollIntoView({behavior: 'smooth'})}
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
          <li><a href="#intro">首页</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#team">团队介绍</a></li>
          <li><a href="http://mail.himagedoctor.com">仁美邮箱</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
