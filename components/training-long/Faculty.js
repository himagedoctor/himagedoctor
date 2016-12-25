import React from 'react'

export const Profile = ({profile}) => (
  <div style={{width: 300, marginBottom: 30}}>
    <div>
      <div style={{marginBottom: 30}}>
        <div>
          <h5>{profile.name}</h5>
          <div style={{paddingBottom: 20}}>{profile.title}</div>
          <div>
            <img src={profile.avatar} alt={profile.title} style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} />
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>{profile.desc}</p>
    </div>
  </div>
)

const Faculty = (props) => {
  const teachers = [
    {
      name: 'Peter Burgos MD',
      title: '石磊 医学博士',
      avatar: '/static/faculty/peter.png',
      desc: '石磊医生来自美国，1991年毕业于美国堪萨斯医学院，医学博士学位，是美国家庭医生协会会员，拥有美国医学委员会执照。伯格斯医生在全科医学方面有着20多年的工作经验，多次参加中国和外国的国际医疗援助活动，可以用流利的英语，汉语，西班牙语与病人交流。',
      key: 1,
    },
    {
      name: 'Carlton Baer MD',
      title: '卡尔顿.贝尔 医学博士',
      avatar: '/static/faculty/carlton.png',
      desc: '贝尔医生1990年毕业于弗吉尼亚医学院，获得医学博士学位。在1993年在俄亥俄州阿克伦完成家庭医生培训。他是美国家庭医师学会会员。在美国、非洲和中国从事全科医学工作18年。贝尔医生可以用熟练的英语，法语和中文进行交流。',
      key: 2,
    },
    {
      name: 'Brian Holsinger MD',
      title: '布莱恩. 霍尔辛格 医学博士',
      avatar: '/static/faculty/brian.png',
      desc: '霍尔辛格医生来自美国，于1995年毕业于俄亥俄州大学骨科医学院，1996年在美国俄亥俄州代顿市医院完成实习。并于1999年完成了美国俄克拉荷马州塔尔萨医疗中心家庭医生培训。霍尔辛格医生也是美国家庭医师学会的会员。在美国和中国有近20年的家庭医生工作经验。他能用熟练的英语和简单的中文沟通和交流。',
      key: 3,
    },
    {
      name: 'Heather Anderson MD',
      title: '希瑟.安德森 医学博士',
      avatar: '/static/faculty/heather.png',
      desc: '安德森医生来自美国，毕业于霍顿学院获得理学学士学位，并在达特茅斯医学院获得医学博士学位。在苏福尔斯的家庭医学住院医生培训基地完成了全科医学住院医生的培训。是美国家庭医师学会的会员。安德森医生可以用流利的英语，西班牙语交流。目前正在学习中文。',
      key: 4,
    },
    {
      name: 'Sunny Wong MD',
      title: '黃日正 医学博士',
      avatar: '/static/faculty/sunny.png',
      desc: '黄日成医生来自加拿大，2002年毕业多伦多大学医学专业。2004年在卡尔加里大学完成了家庭医学住院医生培训。他是加拿大家庭医师学院认可的家庭医生。过去10年里，他的兴趣领域是治疗住院病人，他在加拿大和国际的国际门诊工作过。英语流利，法语和粤语，普通话能进行工作性交流。',
      key: 5,
    },
    {
      name: 'Eva Holsinger MD',
      title: '爱娃. 霍尔辛格 儿科医生',
      avatar: '/static/faculty/eva.png',
      desc: '霍尔辛格医生来自美国，毕业于美国奥克拉荷马州塔尔萨大学，获得化学学士学位。并在奥克拉荷马州州立大学获得医学博士学位。接着她完成儿科博士后学习，来中国之前，她在美国俄亥俄州阿克伦儿童医院从事儿科医生和医学院儿科系的助理教授工作 。霍尔辛格医生可以用流利的英语、德语、挪威语和中文交流。',
      key: 6,
    },
    {
      name: 'Karen Baer MD',
      title: '凯伦.贝尔 眼科医生',
      avatar: '/static/faculty/karen.png',
      desc: '贝尔医生来自美国，于弗吉尼亚州威廉姆和玛丽学院获得生物学学士学位后在弗吉尼亚医学院获得医学博士学位。并在俄亥俄州凯斯西储大学眼科从事住院医生工作。是美国西弗吉尼亚州的执业医生。过去二十年间贝尔医生先后在美国、非洲、中国从事眼科工作。她可以用英语交谈，目前正在学习汉语。',
      key: 7,
    },
    {
      name: '谷建医生',
      title: '全科医生',
      avatar: '/static/faculty/gujiang.png',
      desc: '谷建毕业于中国医科大学，拥有中国全科医学主治医师妇产科主治医师执照，硕士研究生学历。2002年加入仁美国际医疗中心从事全科医疗工作，2006年顺利完成全科培训项目，目前为仁美全科培训项目教师。',
      key: 8,
    },
    {
      name: '周仲华医生',
      title: '医学硕士，全科医学主任医师',
      avatar: '/static/faculty/cassie.png',
      desc: '周仲华医生于1994年毕业于中国医科大学，2002年获得妇产科硕士学位后将专业方向转向全科医学，于2002年到2005年期间在美国仁美全科住院医师规范化培训项目中接受全科医生培训。2005年4月调入海口市人民医院后作为学科带头人创建全科医学科，组织了海口市第一批全科医生岗位培训。2008年起开展全科住院医师规范化培训，带领海口市人民医院成为国家级全科住院医师规范化培训基地。周医生现任海口市人民医院全科医学科主任兼任全科培训基地主任，海南省医学会全科医学分会主任委员，中华医学会全科医学分会常委，《中国全科医学》及《中华全科医师杂志》编委。',
      key: 9,
    },
  ]

  const shortTermTeachers = [
    {
      name: 'Nicholas Comninellis MD',
      title: '医学博士, 国际医学协会主席',
      avatar: '/static/faculty/nicholas.png',
      desc: 'Comninellis医生早期在上海慈善医院为市中心居民看诊一年，而后，在战争频发的南非中的汉堡罗-安哥拉花费两年的时间，发起健康医疗队。他也参与为期一个月的医疗任务分别在Honduras,海蒂，津巴布韦， Burkina Faso,Nige 和中国昆明。Comninellis医生在2003年启动INMED之前，他曾在堪萨斯城的公共医疗系统中工作了6年。 他进入Missori-Kansas的一所医学大学就读，圣路易斯大学的公共健康专业，也成为了西南医疗中心，德克萨斯州大学的一名家庭住院医生。Comninellis医生获得了由Walter Reed Army 研究协会授予的在热点医疗方面的学位证书。同时他也是医疗预防和家庭医学的董事，也是6本关于当代议题书籍的作者。',
      key: 1,
    },
    {
      name: 'Paul Larson',
      title: '医学博士， 全科医生教师',
      avatar: '/static/faculty/larson.png',
      desc: 'Larson医生接受的正规的家庭医生和热带疾病的培训后，他在肯尼亚同非洲内陆教会协作的科索沃医院实习了2年。返回美国后，他完成了医学课程并加入了教职工发展团契。Larson医生现在是匹兹堡大学医学中心圣玛格丽特家庭医学住院医生项目环球健康教育专业的负责人。他一如既往的将其教学技巧教授给在加纳北部的浸信会医学中心学习国际医药公共卫生课程的学生。在那里他通过自己的一系列事情提出了构建环球精神领域中的健康领导力。',
      key: 2,
    },
    {
      name: 'Nancy Crigger',
      title: '护理学系副教授',
      avatar: '/static/faculty/crigger.png',
      desc: 'Crigger医生是家庭护士的开拓者，也是在Graceland大学的护理部副教授 。二十年来，她指导并引领美国的护理学生在美国中部提供医疗保健服务。 Crigger医生在伦理学，文化实践以及临终关怀众多领域上发表过多篇文章。她的学历包括佛罗里达大学的哲学硕士学位和护理博士学位。Crigger医生也是INMED的董事成员之一。',
      key: 3,
    },
    {
      name: 'Micah Flint',
      title: '公共管理学硕士, 国际公共卫生专业',
      avatar: '/static/faculty/flint.png',
      desc: '最早之前，他担任国际医学研究所首席创新执行官，之后担任首席执行官5年。他担任撒玛利亚人紧急医疗搜救组织（国际非政府组织提供灾难训练和应对的组织）董事会成员3年。在加纳的北部，他也是在加纳北部浸信会医疗中心的定期志愿者。Micah的硕士学位是医疗保健领导力和灾难处理的公共管理。',
      key: 4,
    },
    {
      name: 'Joe LeMaster, MD, MPH',
      title: '医学博士，哥伦比亚市密苏里大学社区和家庭医学科副教授，',
      avatar: '/static/faculty/lemaster.png',
      desc: 'LeMaster医生在堪萨斯的医学系毕业，而后在伦敦获得了卫生和热带医学专业的硕士学位。LeMaster医生和他的妻子Juda自1990年到2000年生活在尼泊尔，服务于OKhaldunga医院，为30万人提供医疗帮助，在那他们推广了新生儿健康知识和麻风病的研究。目前，LeMaster医生是美国密苏里大学家庭医学教学,参与社区研究改善儿童健康,为居住在美国的尼泊尔和不丹难民提供帮助。',
      key: 5,
    },
]
  return (
    <section id="faculty" className="home-section text-center bg-gray">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>师资介绍</h2>
                <span className="glyphicon glyphicon-chevron-down" aria-hidden="true" style={{fontSize: 40}}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>长期培训师资</h3>
        <div className="row">
          <div className="col-lg-2 col-lg-offset-5">
            <hr className="marginbot-50" />
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-around'
        }}>
          {teachers.map(teacher => (
            <Profile profile={teacher} key={teacher.key}/>
          ))}
        </div>


        <h3>短期培训师资</h3>
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
          {shortTermTeachers.map(teacher => (
            <Profile profile={teacher} key={teacher.key}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
