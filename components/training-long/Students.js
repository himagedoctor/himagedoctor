import React from 'react'

import {Profile} from './Faculty'

const residents = [
  {
    name: '王旭医生',
    title: '',
    avatar: '/static/students/wangxu.png',
    desc: '王旭毕业于保定医学院，先后在河北，云南，辽宁等地工作10余年。拥有中国医师执照，2014年加入仁美从事全科医学工作。可以用中文和简单的英语进行交流。',
    key: 1,
  },
  {
    name: '吴秉宪医生',
    title: '',
    avatar: '/static/students/edgar.png',
    desc: '吴秉宪医生来自于台湾，毕业于北京大学医学部临床医学专业并获得医学学士学位。后来参加英国爱丁堡大学的医学培训课程。2014年开始，加入美国仁美医疗中心的全科住院医师培训。吴医生可以用流利的英文、中文和闽南语进行交流。',
    key: 2,
  },
  {
    name: '刘晓庆医生',
    title: '',
    avatar: '/static/students/xiaoqing.png',
    desc: '刘晓庆1998-2003年就读于浙江大学医学院临床医学专业并获得医学学士学位，2007-2010年就读于浙江大学医学院临床医学专业获得医学硕士学位。2003-205年在第三军医大学附属新桥医院神经外科工作，2005-2007年在同济大学附属同济医院神经内科工作，2010-2014年浙江大学附属二院麻醉科工作。2014年开始，加入美国仁美医疗中心的全科住院医师培训。',
    key: 3,
  },
  {
    name: '张霄蕾医生',
    title: '',
    avatar: '/static/students/xiaolei.png',
    desc: '张霄蕾2003-2008年就读于中国医科大学临床医药学院临床医学专业并获得医学学士学位。2009-2012年就读于中国医科大学神经病学专业并获得医学硕士学位。2013年在中国人民解放军202医院神经内科从事医疗工作。2015年开始，加入美国仁美医疗中心的全科住院医师培训。',
    key: 4,
  },
  {
    name: '刘巧玲医生',
    title: '',
    avatar: '/static/students/qiaoling.png',
    desc: '刘巧玲2007-2012年就读于北华大学临床医学专业并获得医学学士学位。2012年开始，加入美国仁美医疗中心的全科住院医师培训。',
    key: 5,
  },

]

const grads = [
  {
    name: '孙晓佳医生',
    title: '',
    avatar: '/static/students/grace.png',
    desc: '孙晓佳毕业于锦州医学院，来仁美国际医疗中心以前在北京305医院工作。2010年加入仁美。多次参加国际医疗援助。孙医生也是美国驻沈阳领事馆的责任医生。可以用流利的英语和中文交谈。',
    key: 1,
  },
  {
    name: '李楠楠医生',
    title: '',
    avatar: '/static/students/nannan.png',
    desc: '李楠楠毕业于中国医科大学，拥有中国医师执照，2010年加入仁美国际医疗中心从事全科医疗工作，多次参加国际医疗援助活动及社会慈善活动。在中国全科医学杂志发表论文多篇。李楠楠医生可以用流利的中文和英语进行交流。',
    key: 2,
  },
  {
    name: '马驰医生',
    title: '',
    avatar: '/static/students/machi.png',
    desc: '马驰毕业于佳木斯医学院，后在仁美接受三年美式医学考核学习，拥有中国医师执照，在仁美国际医疗中心从事全科医学工作。同时肩负沈阳儿童福利院医疗顾问工作。经常到福利院和医疗卫生单位开展讲座或者教授儿科医疗知识。可以用流利的中文和英语进行交流。',
    key: 3,
  },
  {
    name: '王欢医生',
    title: '',
    avatar: '/static/students/wanghuan.png',
    desc: '王欢毕业于大连医科大学，拥有中国全科医学主治医师执照，硕士研究生学历。2007年加入仁美国际医疗中心从事全科医疗工作，担任赴澳大利亚出国签证体检指定医生，2011年顺利完成全科培训项目，后受聘于中国医科大学附属盛京医院全科特需门诊。',
    key: 4,
  },
  {
    name: '赵宝宝医生',
    title: '',
    avatar: '/static/students/baobao.png',
    desc: '赵宝宝2001年毕业于沈阳医学院临床医学专业，拥有中国执业医师资格，2006年10月至2008年五月在仁美国际医疗中心工作。2011年毕业于中国医科大学急诊医学专业，现工作于苏家屯区中心医院急诊科。',
    key: 5,
  },
  {
    name: '温宇医生',
    title: '',
    avatar: '/static/students/wenyu.png',
    desc: '温宇拥有中国执业医师资格，2006年至2011年在仁美国际医疗中心工作。2011年毕业于中国医科大学急诊医学专业，现工作于苏家屯区中心医院急诊科。',
    key: 6,
  },
  {
    name: '于丹医生',
    title: '',
    avatar: '/static/students/yudan.png',
    desc: '于丹毕业于中国医科大学，硕士，拥有中国医师执照，2007年加入仁美国际医疗中心从事全科医疗工作，现工作于沈阳市胸科医院。',
    key: 7,
  },
  {
    name: '刘丽医生',
    title: '',
    avatar: '/static/students/liuli.png',
    desc: '刘丽1999年毕业于大连医科大学，2000年考取中国医师执照，从事临床工作四年后就读于中国医科大学获取硕士学位。2009年加入仁美国际医疗中心从事全科医疗工作。目前在日本金泽医科大学综合内科做助理研究员。',
    key: 8,
  },
  {
    name: '林海霞医生',
    title: '',
    avatar: '/static/students/haixia.png',
    desc: '林海霞毕业于锦州医学院，拥有中国医师执照，2009年加入仁美国际医疗中心从事全科医疗工作，多次参加国际医疗援助活动及社会慈善活动。于2013年，就职于中国医科大学附属盛京医院，从事全科医学工作至今。目前为全科医学主治医师。',
    key: 9,
  },


]

const Students = (props) => {
  return (
    <section id="students" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>学生介绍</h2>
                <span className="glyphicon glyphicon-chevron-down" aria-hidden="true" style={{fontSize: 40}}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>住院医生</h3>
        <div className="row">
          <div className="col-lg-2 col-lg-offset-5">
            <hr className="marginbot-50" />
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-around',
        }}>
          {residents.map(resident => (
            <Profile profile={resident} key={resident.key}/>
          ))}
        </div>

        <h3>毕业生</h3>
        <div className="row">
          <div className="col-lg-2 col-lg-offset-5">
            <hr className="marginbot-50" />
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-around',
        }}>
          {grads.map(grad => (
            <Profile profile={grad} key={grad.key}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Students
