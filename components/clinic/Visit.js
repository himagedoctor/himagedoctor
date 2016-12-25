import React from 'react'

const Visit = (props) => {
  return (
    <section id="visit" className="home-section text-center bg-gray">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>就诊模式</h2>
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
            <h3>院内就诊</h3>
            <img src="/static/clinic/flow1.jpg" className="img-responsive" alt="visit flow 1" />
            <br />
            <h3>远程国际会诊</h3>
            <img src="/static/clinic/flow2.jpg" className="img-responsive" alt="visit flow 2" />
            <br />
            <h3>境外就医</h3>
            <img src="/static/clinic/flow3.jpg" className="img-responsive" alt="visit flow 3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit
