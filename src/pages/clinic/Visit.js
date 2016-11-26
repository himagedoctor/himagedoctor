import React from 'react'

import flow1 from '../../images/clinic/flow1.jpg'
import flow2 from '../../images/clinic/flow2.jpg'
import flow3 from '../../images/clinic/flow3.jpg'

const Visit = (props) => {
  return (
    <section id="visit" className="home-section text-center bg-gray">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>就诊模式</h2>
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
            <h3>院内就诊</h3>
            <img src={flow1} className="img-responsive" alt="visit flow 1" />
            <br />
            <h3>远程国际会诊</h3>
            <img src={flow2} className="img-responsive" alt="visit flow 2" />
            <br />
            <h3>境外就医</h3>
            <img src={flow3} className="img-responsive" alt="visit flow 3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit
