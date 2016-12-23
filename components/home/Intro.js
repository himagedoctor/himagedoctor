import React from 'react';
import ImageSlider from '../ImageSlider';

export default () => {
  const images = [
    {original: "/static/home/himage.jpg", key:1},
    {original: "/static/home/training.jpg", key:2},
    {original: "/static/home/clinic.jpg", key:3},
    {original: "/static/home/team.jpg", key:4},
    {original: "/static/home/charity.jpg", key:5},
  ];
  return (
    <section id="intro" className="home-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div style={{paddingBottom: 20}}>
              <a href="#" className="btn btn-primary disabled" style={{textTransform: 'lowercase'}} role="button">预约就诊: 400-0077-090 |
            clinic@himagedoctor.com</a>
            </div>
            <ImageSlider images={images}/>
          </div>
        </div>
        <div className="row service">
          <div className="col-sm-4 col-md-4">
            <div className="service-box">
              <div className="service-icon">
                <span className="glyphicon glyphicon-education" aria-hidden="true" style={{fontSize: 75}}></span>
              </div>
              <div className="service-desc">
                <h3>全科培训</h3>
                <p>由美国CMDA医师协会提供专业全科师资教学</p>
                <p>外籍医师一对一指导教学</p>
                <p>三甲级医院科室轮转</p>
                <p>短期国际门诊进修学习</p>
                <p>全国医学会议培训</p>
                <p>培训优秀者有机会出国学习</p>
                <p>参与仁美每年的国际医疗援助活动</p>
                <p>国内偏远地区及福利院、养老院义诊</p>
                <p>医疗英语培训学习</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="service-box">
              <div className="service-icon">
                <span className="glyphicon glyphicon-heart" aria-hidden="true" style={{fontSize: 75, color: 'red'}}></span>
              </div>
              <div className="service-desc">
                <h3>慈善工作</h3>
                <p>爱心慈善医疗，包括农村、养老院、福利院义诊，国外义诊，国内及国际医疗救援</p>
                <p>慈善门诊为特殊人群及经济困难患者减免医疗费用</p>
                <p>为助养孤儿减免医疗费用</p>
                <p>为临终患者提供生活照顾及免费医疗服务</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="service-box">
              <div className="service-icon">
                <span className="glyphicon glyphicon-leaf" aria-hidden="true" style={{fontSize: 75, color: 'green'}}></span>
              </div>
              <div className="service-desc">
                <h3>国际门诊</h3>
                <p>全科医疗,心理咨询，急，重症转诊住院全程陪同服务</p>
                <p>可以提供基于英、法、德、日、汉、西班牙语的医疗服务</p>
                <p>美国 CMDA 协会提供技术支持，进行跨国网络会诊</p>
                <p>24小时电话预约挂号</p>
                <p>提供英文检查报告、制作英文体检报告、出具英文医疗证明</p>
                <p>定期开展健康堂</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
