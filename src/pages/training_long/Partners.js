import React from 'react'

import hospital1 from '../../images/partners/hospital1.jpg'
import hospital2 from '../../images/partners/hospital2.png'
import govHospital from '../../images/partners/gov_hospital.jpg'
import hisimage from '../../images/partners/hisimage.png'
import inmed from '../../images/partners/inmed.png'

const Partners = (props) => {
  return (
    <section id="partners" className="home-section text-center bg-gray">
      <div className="heading-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>合作医院</h2>
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
          <div className="col-xs-6 col-md-4">
            <a href="#" className="thumbnail">
              <img src={hospital1} alt="hospital 1" />
            </a>
          </div>
          <div className="col-xs-6 col-md-4">
            <a href="#" className="thumbnail">
              <img src={hospital2} alt="hospital 2" />
            </a>
          </div>
          <div className="col-xs-6 col-md-4">
            <a href="#" className="thumbnail">
              <img src={govHospital} alt="government hospital" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <a href="#" className="thumbnail">
              <img src={hisimage}  alt="In His Image" />
            </a>
          </div>
          <div className="col-xs-6 col-md-6">
            <a href="#" className="thumbnail">
              <img src={inmed} alt="INMED" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
