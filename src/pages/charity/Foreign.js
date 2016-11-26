import React, { PropTypes } from 'react'
import ImageSlider from '../shared/ImageSlider'

const images = [
  {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006670/himagedoctor/philippine.jpg", key: 1 },
  {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006669/himagedoctor/pakistan.jpg", key: 2 },
  {original: "http://res.cloudinary.com/ds833mgxf/image/upload/v1453006666/himagedoctor/cambodia.jpg", key: 3 },
]

const Foreign = (props) => {
  return (
    <section id="foreign" className="home-section text-center bg-gray">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>国外慈善活动</h2>
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
            <p><strong>义诊地点</strong>：柬埔寨，尼泊尔，印度尼西亚，巴基斯坦，埃及等地区进行义诊活动。</p>
            <p><strong>帮助人群</strong>：养老院孤寡困难及需要帮助的老人，孤儿院的孩子，贫困人群。</p>
            <p><strong>慈善活动时间</strong>：每年一次柬埔寨活动及不定时的与国内外NGO合作进行慈善活动。</p>
            <p><strong>灾难医疗支援</strong>：在全球范围内的灾难后医疗援助工作。</p>
            <p><strong>合作</strong>：现已和国外几家慈善机构合作进行慈善活动。如果如果有意向合作单位请填写申请表（<a href="http://www.himagedoctor.com/docs/charity_application.doc">请点击申请表下载</a>)</p>
            <p><strong>新闻</strong>：2015年中我们与合作伙伴在甘肃，青海，宁夏进行医疗支援。2015-尼泊尔震后我们与合作伙伴对尼泊尔震区进行医疗援助</p>
          </div>
        </div>
        <div className="row">
          <ImageSlider images={images} />
        </div>
      </div>
    </section>
  )
}

export default Foreign
