import React from 'react'

const Partners = (props) => {
  return (
    <section id="partners" className="home-section text-center bg-gray">
      <div className="heading-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>合作医院</h2>
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
          <div className="col-xs-6 col-md-4">
            <a href="#" className="thumbnail">
              <img src="/static/partners/hospital1.jpg" alt="hospital 1" />
            </a>
          </div>
          <div className="col-xs-6 col-md-4">
            <a href="#" className="thumbnail">
              <img src="/static/partners/hospital2.png" alt="hospital 2" />
            </a>
          </div>
          <div className="col-xs-6 col-md-4">
            <a href="#" className="thumbnail">
              <img src="/static/partners/gov_hospital.jpg" alt="government hospital" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <a href="#" className="thumbnail">
              <img src="/static/partners/hisimage.png" alt="In His Image" />
            </a>
          </div>
          <div className="col-xs-6 col-md-6">
            <a href="#" className="thumbnail">
              <img src="/static/partners/inmed.png" alt="INMED" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
