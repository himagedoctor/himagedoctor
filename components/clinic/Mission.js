import React, { PropTypes } from 'react'
import ImageSlider from '../ImageSlider'

const Mission = (props) => {
  const images = [
    {original: '/static/clinic/front.jpg' , key:1},
    {original: '/static/clinic/waiting_room.jpg' , key:2},
    {original: '/static/clinic/rest.jpg', key:3},
    {original: '/static/clinic/clinic_room1.jpg', key:4},
    {original: '/static/clinic/clinic_room2.jpg', key:5},
  ];
  return (
    <section id="mission" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>国际门诊使命</h2>
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
            <ul className="list-unstyled">
              <li className="list-item">秉承着“爱人如己，医者仁心”的理念服务中外患者</li>
              <li className="list-item">真诚对待患者和合作伙伴</li>
              <li className="list-item">高效优质的医疗服务</li>
              <li className="list-item">全心关注患者健康</li>
              <li className="list-item">充分保护患者隐私</li>
            </ul>
            <ImageSlider images={images}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
