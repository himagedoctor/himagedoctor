import React from 'react'
import ImageSlider from '../ImageSlider'

const Intro = (props) => {
  const images = [
    {original: '/static/home/team.jpg', key:1},
    {original: '/static/training/training1.jpg', key:2},
    {original: '/static/training/training2.jpg', key:3},
    {original: '/static/home/training.jpg', key:4},
  ];
  return (
    <section id="intro" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>仁美全科医生培训</h2>
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
          <div className="col-md-12">
            <p>
              仁美国际医疗（中国）多年来致力于全科医生培训项目。由美国家庭医师协会会员负责专业全科教学。<strong><a href="http://www.inhisimage.org">总部</a></strong>位于美国俄克拉荷马州图尔萨市。创建至今，先后在北京就、上海、广州、南京、武汉、郑州、长春、大连等地开展全科培训。2005—2013年协助国家卫生部培训全科师资力量，目前为中国医科大学全科医生实习基地。
            </p>
            <p><strong>培训时间</strong>：3-4年 (<a href="http://www.himagedoctor.com/docs/long_training.doc">下载培训内容, 课程表</a>
              | <a href="http://www.himagedoctor.com/docs/fp_application.doc">下载全科培训申请表</a> )</p>
            <p>
              <strong>短期培训</strong>: 时间1-6周 (<a href="http://www.himagedoctor.com/docs/short_term_training_app.docx">下载短期全科培训申请表</a>)
            </p>
            <p>
              <strong>培训要求</strong>: 正规西医大学本科毕业, 学士学位以上学历, 英语四级或者四级以上, 有医师执照
            </p>
          </div>
        </div>
        <div className="row" style={{fontSize: 16}}>
          <div className="col-md-4">
            <strong>培训方式</strong><br />
            <ul className="text-left">
              <li>外籍医师一对一指导教学</li>
              <li>三甲级医院科室轮转</li>
              <li>短期国际门诊进修学习</li>
              <li>全国及国际医学学术会议培训</li>
              <li>部分出国访问学习</li>
            </ul>
          </div>
          <div className="col-md-4">
            <strong>重点培训六大核心技能</strong><br />
            <ul className="text-left">
              <li>医学知识</li>
              <li>以患者为中心的照顾</li>
              <li>对医学系统的熟知</li>
              <li>职业素养</li>
              <li>良好的沟通技巧</li>
              <li>基于实践的学习和提高</li>
            </ul>
          </div>
          <div className="col-md-4">
            <strong>培训后发展方向</strong><br />
            <ul className="text-left">
              <li>仁美连锁门诊从事医生或管理工作</li>
              <li>推荐参加美国全科医生培训项目，考取美国医生执照</li>
              <li>推荐至国际门诊或医院工作</li>
              <li>外国驻中国使领馆或国际企业驻场医生</li>
              <li>国际旅行团队及国际保险企业的责任医生及医疗顾问</li>
              <li>综合医院全科诊室工作</li>
            </ul>
          </div>
        </div>
        <ImageSlider images={images} />
        <div className="row">
          <div className="col-md-12">
            <br />
            <h3>FAMILY  PHYSICIANS  TRANING</h3>
            <p>
              H’Image Doctor is committed to medical education. Over the last number of years,we have been partnering with the Ministry of Health to develop a robust primary health care system by training general practice doctors .
            </p>
            <p>
              <strong>Duration of training</strong>: 3 years
            </p>
            <p>
              <strong>Training course</strong><br />
              Residents receive quality one-on-one teaching from faculty physicians
              <br />
              Residents do clinical rotations at the city’s top hospitals and international clinic
              <br />
              Residents participate in national and international conferences
              <br />
              Residents study abroad as short-time visitors
            </p>
            <p>
              <strong>Development after training</strong>
              <br />
              Graduates are given priority when hiring physicians or managers at H’Image clinics
              <br />
              Graduates can join family medicine residency programs in the U.S.A
              <br />
              Graduates are recommended to international clinics and hospitals
              <br />
              Graduates are recommended for positions at consulates and international enterprises
              <br />
              Graduates can become medical consultants at international travel insurance companies
              <br />
              Graduates can join general practice departments at various hospitals
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
