import React from 'react';
import logo from '../images/logo.png';
import qrcode from '../images/qrcode.jpg';

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <p>&copy; 仁美国际医疗（中国）</p>
        </div>
        <div className="col-md-5 col-lg-5">
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
              <img alt='网络经济主体信息' border='0' DRAGOVER='true' src={logo} />
            </a>
          </p>
        </div>
        <div className="col-md-3 col-lg-3">
          <p className="text-right"><img src={qrcode} alt="himage qr code" /></p>
        </div>
      </div>
    </div>
  </footer>
);
