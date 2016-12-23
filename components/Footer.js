import React from 'react';

const Footer = () => (
  <div>
  <footer>
    <div className="container">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: 200}}>
          <p>&copy; 仁美国际医疗（中国）</p>
          <img src="/static/qrcode.jpg" alt="himage qr code" />
        </div>
        <div>
          <p className="text-right">
            沈阳市大东区滂江街54号 德济医院3楼VIP门诊
          </p>
          <p className="text-right">
            <abbr title="Phone">电话预约就诊</abbr> 400-0077-090 |
            clinic@himagedoctor.com
          </p>
          <p className="text-right">
            <abbr title="Phone">投诉信箱</abbr> service@himagedoctor.com
          </p>
          <p className="text-right">
            <abbr title="charity">慈善合作联系信箱</abbr> qifeng@himagedoctor.com
          </p>
          <p className="text-right">
            辽ICP备15018408号－1
            <a href='http://wljg.lngs.gov.cn/iciaicweb/dzbscheck.do?method=change&id=4C80655109974FFEA24474352CD46065'>
              <img alt='网络经济主体信息' border='0' src="/static/logo.png" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  <style jsx>{`
    footer {
      text-align: center;
	    padding: 50px 0 ;
      background-color: #67b0d1;
    }
    footer p {
    	color: #f8f8f8;
    }
  `}</style>
  </div>
);

export default Footer;
