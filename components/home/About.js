import React from 'react';

export default () => (
  <section id="about" className="home-section text-center bg-gray">
  <div className="heading-about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <div className="section-heading">
            <h2>关于我们</h2>
            <i className="fa fa-2x fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-2 col-lg-offset-5">
        <hr className="marginbot-50" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div id="team-pic">
          <img src="/static/home/team.jpg" alt="team" className="img-responsive center" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <p>美国仁美医疗中心是一个外资医疗机构，总部位于美国俄克拉荷马州图尔萨市。2002年进驻中国辽宁沈阳，致力于全科医生培训、国际连锁门诊、慈善医疗援助，孤儿家庭助养，HIV患者的服务及临终关怀项目。仁美国际医疗团队由来自中国、美国、加拿大、德国、塞拉利昂、挪威等国的医务人员组成。自2005年至今，每年帮助首都医科大学进行全国师资培训。先后在上海、广州、南京、杭州、郑州、长春、大连、锦州等地开展了全科培训工作。并与本地中国医科大学附属医院、辽宁省医院、沈阳市妇婴医院等大型综合性医院联合培养全科医生。创建至今，我们在柬埔寨、巴基斯坦、印度尼西亚、埃及等国家共进行10次国际医疗援助活动。曾为国内30多个偏远地区提供慈善医疗服务，并定向为11家养老院和5家福利院提供慈善医疗服务。
        </p>
        <video width="100%" controls>
          <source src="http://www.himagedoctor.com/docs/himage480p.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);
