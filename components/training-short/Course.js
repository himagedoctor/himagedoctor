import React from 'react'

const Course = (props) => {
  return (
    <section id="course" className="home-section text-center">
      <div className="heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>短期培训课程介绍</h2>
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
            <h3>INMED 国际医药公共卫生综合课程</h3>
            <p>
              当今医学早已是全球性的行业，因为疾病、医疗资源、医疗人员、医疗合作伙伴跨越了各大州。借助仁美----美国全科医生和哈弗医疗中心的平台，通过INMED 国际医药公共卫生综合课程在医疗领域上预备好自己！
            </p>
            <p>
              <ul className="text-left">
                <li>课程有助于推进中国医生的职业生涯</li>
                <li>由美国大学、移民局和住院医生培训项目共同认可授权的学历证书</li>
                <li>有机会同美国的全科医生导师学习</li>
                <li>提升对美国和国际医疗服务标准的能力</li>
                <li>加强临床技能，在中国做全科医生的带领者</li>
              </ul>
            </p>
            <p><strong>该课程由众多重要的医疗机构参与</strong>：<br />
              <ul className="text-left">
                <li>哈佛大学</li>
                <li>纽约大学</li>
                <li>匹兹堡大学</li>
                <li>德克萨斯大学达拉斯分校</li>
                <li>美国家庭医生学院</li>
                <li>美国急诊医学学院</li>
                <li>美国小儿科学院</li>
                <li>加拿大皇家外科医师学院</li>
              </ul>
              <div className="text-left">
                随着课程的学习，英语导师的帮助，你的英语可以得到提升, <em>成为一名全球化的医生，请加入INMED 国际医药和公共卫生综合课程</em>
              </div>
            </p>
            <h3>课程设计</h3>
            <p>
              课程体系是综合性的，20周网络授课，2天的实体班级授课、技能培训及考评。课程重心在于如下内容：<br />
              <ul className="text-left">
                <li>贫困落后地区的疾病</li>
                <li>国际HIV药物</li>
                <li>妇女和儿童的健康</li>
                <li>临床技能在资源匮乏地区的使用</li>
                <li>国际公共卫生</li>
                <li>跨文化技能</li>
                <li>灾害救治处理能力</li>
                <li>国际健康问题的领导力</li>
              </ul>
            </p>
            <h3>课程目标</h3>
            <p>
              完成NMED 国际医疗和公共卫生综合课程，学生在资源匮乏的地区/社区也会具备如下能力：<br />
              <ul className="text-left">
                <li>贫困落后引发的疾病的预防、诊断和治疗</li>
                <li>HIV传染的预防、诊断和治疗</li>
                <li>对孕妇和新生儿提供健康帮助</li>
                <li>在资源匮乏的地区使用高效的临床技能</li>
                <li>健康理念的广泛普及，预防致残致死的发生</li>
                <li>适合其文化的卫生保健</li>
                <li>降低灾害指数，应对灾害措施</li>
                <li>培养团队领导在健康问题的计划和执行力</li>
              </ul>
            </p>
            <h3>学费</h3>
            <p>
              国际医学&公共卫生综合课程的费用为2000美元（人民币13200元)/人。
            </p>
            <h3>课程时间</h3>
            <p>
              线上授课总计时间45小时，实体班型授课为24小时 <br />
              学生每周有5到10小时参与网络课堂问题<br />
              每一个学生要有自己专属的电脑，实现网络听课的任务，参与实体班型的授课及参与期末考试。
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course
