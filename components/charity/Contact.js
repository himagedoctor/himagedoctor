import React, { PropTypes } from 'react'

const Contact = (props) => {
  return (
    <section id="contact" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>联系方式</h2>
                <span className="glyphicon glyphicon-chevron-down" aria-hidden="true" style={{fontSize: 40}}></span>
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
            <strong>电话</strong>：024-22472979 或 024-22742989
            <br />
            <strong>邮箱</strong>: qifeng@himagedoctor.com
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
