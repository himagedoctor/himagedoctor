import React from 'react'

import logoSmall from '../../images/logo_small.png'
import inmed from '../../images/inmed.png'

const Application = (props) => {
  return (
    <section id="application" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>报名方式</h2>
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
          <div className="col-md-6">
            <p>
              <img src={logoSmall} />
            </p>
            <p>
              <strong>仁美国际医疗(中国)</strong><br />
              <strong>邮箱</strong>：clinic@himagedoctor.com<br />
              <strong>电话</strong>：13109862856 <br />
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <img src={inmed} />
            </p>
            <p>
              <strong>INMED(美国)</strong><br />
              <strong>电邮</strong>：nicholas@inmed.us<br />
              <strong>电话</strong>：816-520-6900 <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Application
