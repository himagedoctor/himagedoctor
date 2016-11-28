import React from 'react'
import InmedNavBar from './InmedNavBar'
import Footer from '../shared/Footer'

import logoSmall from '../../images/logo_small.png'
import inmed from '../../images/inmed.png'

class Inmed extends React.Component {
  componentDidMount() {
    window.onscroll=function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-nav").classNameList.add('top-nav-collapse');
      } else {
        document.getElementById("top-nav").classNameList.remove('top-nav-collapse');
      }
    }
  }
  render() {
    return (
      <div>
        <InmedNavBar />
        <section id="course" className="home-section text-center">
          <div className="heading-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                    <h2>INMED International Medicine & Public Health Hybrid Course</h2>
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
                <p>
                   Medicine today is a global profession, since diseases, resources, colleagues and partnerships span all continents. Prepare yourself for the medicine of today through the INMED International Medicine & Public Health Hybrid Course, made available to you through H’Image, the American Academy of Family Physicians, and Harvard Medical Center.
                </p>
                <p>
                  This course will particularly advance the careers of Chinese physicians and students through provision of:
                  <ul className="text-left">
                    <li>A United States academic credential recognized by US universities, residency programs, and immigration officials</li>
                    <li>Opportunities to form relationships with influential United States faculty physicians</li>
                    <li>Improved familiarity with American and international standards of medical care</li>
                    <li>Improved clinical skills necessary to serve a Pioneer GP in China and beyond</li>
                    <li>Help in the application for a foreign residency training program</li>
                  </ul>
                </p>
                <p><strong>This course is endorsed by numerous famous medical institutions including</strong>：<br />
                  <ul className="text-left">
                    <li>Harvard University</li>
                    <li>New York University</li>
                    <li>University of Pittsburg</li>
                    <li>University of Texas at Dallas</li>
                    <li>American Academy of Family Physicians</li>
                    <li>American College of Emergency Medicine</li>
                    <li>American Academy of Pediatrics</li>
                    <li>Royal Canadian College of Surgeons</li>
                  </ul>
                  <div className="text-left">
                    Skills in English language will also be improved, through consistent study of the course content, aided by provision of English language tutoring provided as part of the course.
                    Become a truly global medicine physician. Enroll NOW in the INMED International Medicine & Public Health Hybrid Course
                  </div>
                </p>
                <h3>COURSE DESCRIPTION</h3>
                <p>
                  This Course is a hybrid: 20 weeks online, plus 2 days in-classNameroom for workshops, skill stations, and final exams. The Course will particularly address the following subjects:
                  <ul className="text-left">
                    <li>Diseases of Poverty</li>
                    <li>International HIV Medicine</li>
                    <li>Maternal-Newborn Health</li>
                    <li>Clinical Skills used in low-resource settings</li>
                    <li>International Public Health</li>
                    <li>Cross-Cultural Skills</li>
                    <li>Disaster Management</li>
                    <li>International Health Leadership</li>
                  </ul>
                </p>

                <h3>COMPETENCY OBJECTIVES</h3>
                <p>
                  At the completion of the INMED International Medicine & Public Health Hybrid Course, students in the context of a low resource community will be able to:
                  <ul className="text-left">
                    <li>Prevent, diagnose and treat leading diseases of poverty</li>
                    <li>Prevent, diagnose and treat HIV infection</li>
                    <li>Provide for the health of pregnant women and newborns</li>
                    <li>Demonstrate proficiency in clinical skills used in low-resource settings</li>
                    <li>Advance community-wide health promotion and death/disability prevention</li>
                    <li>Assure that healthcare is culturally appropriate</li>
                    <li>Mitigate disaster risk and respond to disaster events</li>
                    <li>Design and implement healthcare as part of a leadership team</li>
                  </ul>
                </p>

                <h3>EDUCATIONAL COMPONENTS/METHODS</h3>
                <p>
                  Students in the Course will achieve the above learning objectives through the following educational components:
                  <br />
                  <ul className="text-left">
                    <li>
                      Interactive online presentations by expert professionals
                    </li>
                    <li>
                      Case studies providing analysis
                    </li>
                    <li>
                      Skill stations to develop technical facility
                    </li>
                    <li>
                      Formation groups exploring personal application
                    </li>
                  </ul>
                </p>
                <h3>ENROLLMENT QUALIFICATIONS</h3>
                <p>
                  The Course is open to healthcare professionals and healthcare profession students in the fields that routinely diagnose and treat disease, including physicians, dentists, advanced practice nurses, physician assistants, pharmacists, resident physicians, and students of medicine, dentistry, advanced practice nursing, physician assistants, and pharmacy. Participants are strongly counseled to attend the entire course to optimize its benefit.
                </p>
                <h3>CERTIFICATION</h3>
                <p>
                  Students who successfully complete the course of study and who pass the final examinations will receive the INMED Academic Qualification In International Medicine & Public Health. Verification of the educational experience will be provided to the student’s affiliated school or residency program. Those who do not pass the final examinations will receive a certificate of attendance.
                </p>
                <h3>DATES</h3>
                <p>
                  This course consists of an online section and an in-classNameroom section. Ideally, the in-classNameroom section follows immediately after the online section. However, to accommodate conflicting schedules, students may defer the in-classNameroom segment for up to one year following completion of the online section. Upcoming dates for the International Medicine & Public Health Hybrid Course in China (Shenyang) is as follow:
                  <br />Online session: February 22-July 10, 2016
                  <br />In-Classroom session: July 18-19, 2016( Shenyang, Liaoning, China)
                </p>
                <h3>COST</h3>
                <p>
                  The cost for the International Medicine & Public Health Intensive Hybrid Course in China is $2,000(¥13,200 RMB) per individual. 
                </p>
                <h3>CONTACT HOURS</h3>
                <p>
                  The total number of contact hours for the online section of the course is 45 hours. The total number of contact hours for the in-classNameroom section of the course is 24 hours.
                </p>
                <h3>STUDENT TIME REQUIREMENTS</h3>
                <p>
                  Students will need to devote 5-10 hours per week to the online section of the course.
                </p>
                <h3>COMPUTING REQUIREMENTS</h3>
                <p>
                  Each student must have access to a personal computer capable of wireless Internet access for the online assignments, in-className sessions, and for participation in the final examinations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="home-section text-center bg-gray">
          <div className="heading-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                    <h2>SYLLABUS</h2>
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
                <p>
                  In addition to the assigned learning modules below, each week students will also critique assigned articles, participate in article discussion boards, and complete assigned application exercises.
                </p>
                <p>
                  <em>
                    Medicine Week 1-2 Online: Diseases of Poverty, Part One February 22-March 6, 2016
                  </em><br />
                  Module One: Introduction To Diseases Of Poverty<br />
                  Module Two: Malnutrition<br />
                  Module Three: Enteric Infections<br />
                  Module Four: Viral Diseases<br />
                  Module Five: Malaria<br />
                </p>
                <p>
                  <em>
                    Medicine Week 3-4 Online: Diseases of Poverty, Part Two, March 7-March 20
                  </em><br />
                  Module Six: Tuberculosis<br />
                  Module Seven: Bacterial Infections<br />
                  Module Eight: Protozoal Diseases<br />
                  Module Nine: Intestinal Helminth Infections<br />
                  Module Ten: Tissue Helminth Infections<br />
                  Module Eleven: Disease Management Protocols<br />
                </p>
                <p>
                  <em>
                    Medicine Week 5-6 Online: International HIV Medicine, March 21-April 3
                  </em><br />
                  Module One: Introduction To The HIV/AIDS Epidemic<br />
                  Module Two: Prevention of HIV Infection<br />
                  Module Three: Mother To Child Transmission (MTCT) Prevention<br />
                  Module Four: Treatment Of HIV Infection<br />
                  Module Five: HIV-Related Opportunistic Diseases<br />
                  Module Six: Children & HIV Infection<br />
                </p>
                <p>
                  <em>
                    Medicine Week 7-8 Online: Maternal Newborn Health: Mothers, April 4-April 17
                  </em><br />
                  Module One: Surviving Motherhood<br />
                  Module Two: Pre And Post Natal Care<br />
                  Module Three: Pregnancy Complications<br />
                  Module Four: Pressing Women Disability Issues<br />
                </p>
                <p>
                  <em>
                    Medicine Week 9-10 Online: Maternal Newborn Health: Newborns, April 18-May1
                  </em><br />
                  Module Five: Newborn Care Overview<br />
                  Module Six: Healthy Newborn<br />
                  Module Seven: Newborn Problems And Management<br />
                  Module Eight: Maternal Newborn Future Vision<br />
                </p>
                <p>
                  <em>
                    Public Health Week 11-12 Online: International Public Health, May 2-May 15
                  </em><br />
                  Module One: Introduction To International Public Health<br />
                  Module Two: Health And Social Context<br />
                  Module Three: Strategy For Health<br />
                  Module Four: Effective Health Promotion<br />
                  Module Five: Effective Disease And Injury Intervention<br />
                </p>
                <p>
                  <em>
                    Public Health Week 13-14 Online: Disaster Management, May 16-May 29
                  </em><br />
                  Module One: Introduction to Disaster Management<br />
                  Module Two: Disaster Mitigation<br />
                  Module Three: Disaster Preparedness<br />
                  Module Four: Disaster Response<br />
                  Module Five: Disaster Recovery<br />
                </p>
                <p>
                  <em>
                    Public Health Week 15-16 Online: Cross-Cultural Skills, May 30-June 12
                  </em><br />
                  Module One: Relevance Of Cultures<br />
                  Module Two: Basic Cross-cultural Competency<br />
                  Module Three: Healthcare Cross-cultural Competency <br />
                  Module Four: International Cross-cultural Competency<br />
                </p>
                <p>
                  <em>
                    Public Health Week 17-18 Online: International Health Leadership, June 13-June 26
                  </em><br />
                  Module One: Introduction To International Health Leadership<br />
                  Module Two: Strategy For Health<br />
                  Module Three: Major International Health Initiatives<br />
                  Module Four: How To Lead A Health System<br />
                </p>
                <p>
                  <em>
                    Public Health Week 19-20 Online: Teaching & Skill Transfer, June 27-July 10
                  </em><br />
                  Module One: Importance of Skill Transfer<br />
                  Module Two: Teaching Strategies<br />
                  Module Three: Teaching Essentials<br />
                  Module Four: How To Measure Outcomes<br />
                </p>
              </div>
            </div>

            <h3>In-Classroom Section Schedule: July 18-19, 2016, Shenyang China</h3>
            <div className="row">
              <div className="col-md-6">
                <p><strong>In-Class Session, July 18</strong></p>
                <ul className="text-left">
                  <li>8:00 Introduction of International Medicine & Public Health Intensive Hybrid Course Students</li>
                  <li>8:30 Fighting The Diseases Of Poverty Session</li>
                  <li>9:30 Essential Newborn Care &Helping Babies Breath Skill Stations</li>
                  <li>10:30 Obstetrical Skill Stations</li>
                  <li>12:30 International Medicine Exam Review</li>
                  <li>1:30 F-100 Formulation Exercise</li>
                  <li>1:30 Suturing & Casting Skill Stations</li>
                  <li>3:30 Tropical Medicine Case Studies</li>
                  <li>4:30 International Medicine Final Exam</li>
                  <li>6:00 Informal dinner outing with classNamemates</li>
                </ul>
              </div>
              <div className="col-md-6">
                <p><strong>In-Class Session, July 19</strong></p>
                <ul className="text-left">
                  <li>8:00 Introduction of International Public Health Intensive Hybrid Course Students and Hand Shaking Exercise</li>
                  <li>8:30 From Rescue To Resilience Session</li>
                  <li>9:30 Oral Rehydration Formulation Exercise</li>
                  <li>9:30 Group Photo</li>
                  <li>10:00 Disaster Management Skills Session</li>
                  <li>11:00 Cross-Cultural Skills Session</li>
                  <li>11:20 International Public Health Exam Review</li>
                  <li>12:30 Poverty Meal</li>
                  <li>1:30 Community Health Survey Exercise</li>
                  <li>3:30 Launching Your International Healthcare Career Session</li>
                  <li>4:30 International Public Health Final Exam</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="application" className="home-section text-center">
          <div className="heading-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                    <h2>Contact</h2>
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
              <div className="col-md-6">
                <p>
                  <img src={logoSmall} />
                </p>
                <p>
                  <strong>Himage Doctor (China)</strong><br />
                  <strong>Email</strong>：clinic@himagedoctor.com<br />
                  <strong>Phone</strong>：13109862856 <br />
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <img src={inmed} />
                </p>
                <p>
                  <strong>INMED(US)</strong><br />
                  <strong>Email</strong>：nicholas@inmed.us<br />
                  <strong>Phone</strong>：816-520-6900 <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Inmed
