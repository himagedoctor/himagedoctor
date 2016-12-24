import React, { PropTypes } from 'react'
import ImageSlider from '../ImageSlider'

const Mainland = (props) => {
  const images = [
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006666/himagedoctor/charity1.jpg", key: 1 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006666/himagedoctor/charity2.jpg", key: 2 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006667/himagedoctor/charity3.jpg", key: 3 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006667/himagedoctor/charity4.jpg", key: 4 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006667/himagedoctor/charity5.jpg", key: 5 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006668/himagedoctor/charity6.jpg", key: 6 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006668/himagedoctor/charity7.jpg", key: 7 },
    {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006671/himagedoctor/orphanage.jpg", key: 8 },
  ];

  return (
    <section id="mainland" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>国内慈善活动</h2>
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
            <p><strong>义诊地点</strong>：沈阳周围的养老院，沈阳及省内阜新，朝阳，抚顺辽中等孤儿院，辽宁省内偏远贫困的农村如建昌，建平，朝阳，铁岭，辽阳，岫岩，康平等及国内偏远贫困地区。国内偏远贫困少数民族地区如云南，甘肃，四川，玉树等。</p>
            <p><strong>帮助人群</strong>：养老院孤寡困难及需要帮助的老人，孤儿院的孩子，农民工，贫困人群。</p>
            <p><strong>慈善活动时间</strong>：现在沈阳我们有固定每周有4个人半天的慈善活动时间及不定期的与一些NGO组织的合作。</p>
            <p><strong>灾难医疗支援</strong>：在四川地震，玉树地震等灾难后对受灾人群提供相应的医疗支援。</p>
            <p><strong>合作</strong>：现已和国内几家NGO合作。如果有意向合作单位请填写申请清表（<a href="http://119.10.57.156:8080/docs/charity_application.doc">请点击申请表下载</a>）</p>
            <p><strong>新闻</strong>：2015-年11月到-12月期间每周三我们为沈阳周边的养老院送去圣诞及新年礼物</p>
          </div>
        </div>
        <div className="row">
          <ImageSlider images={images} />
        </div>
      </div>
    </section>

  )
}

export default Mainland
