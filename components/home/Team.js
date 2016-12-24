import React from 'react';

const board = [
  { name: 'Peter Burgos',
    title: '常务董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/peter.png',
    key: 1,
  },
  { name: 'Brian Holsinger',
    title: '常务董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/brian.png',
    key: 2,
  },
  { name: 'Carlton Baer',
    title: '常务董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/carlton.png',
    key: 3,
  },
  { name: '高洪梅',
    title: '执行董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/hongmei.png',
    key: 4,
  },
  { name: 'Jenkins',
    title: '董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/jenkins.png',
    key: 5,
  },
  { name: 'Alex',
    title: '董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/alex.png',
    key: 6,
  },
  { name: 'Carl',
    title: '董事',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/carl.png',
    key: 7,
  },
  { name: '庞严',
    title: '董事长',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/pangyan.png',
    key: 8,
  },
];

const members = [
  { name: '庞严',
    title: 'CEO',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/pangyan.png',
    key: 9,
  },
  { name: 'Carl',
    title: 'CFO',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/carl.png',
    key: 10,
  },
  { name: '刘辉',
    title: 'CEO Assistant',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/jessica.png',
    key: 11,
  },
  { name: '马驰',
    title: 'CEO Medical Assistant',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/machi.png',
    key: 12,
  },
  { name: '李楠楠',
    title: '全科培训部总监兼市场部总监',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/nannan.png',
    key: 13,
  },
  { name: '孙晓佳',
    title: '医疗总监',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/grace.png',
    key: 14,
  },
  { name: '齐峰',
    title: '医疗慈善部总监',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/qifeng.png',
    key: 15,
  },
  { name: '徐继辉',
    title: '护理部主任兼保险专员',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/christina.png',
    key: 16,
  },
  {
    name: '张朝阳',
    title: '后勤部主任',
    picture: 'http://res.cloudinary.com/ds833mgxf/image/upload/v1453522498/himagedoctor/yangyang.png',
    key: 17,
  },
];



const Member = ({member}) => (
  <div className="team boxed-grey">
    <div className="inner">
      <h5>{member.name}</h5>
      <div className="subtitle">{member.title}</div>
      <div className="avatar"><img src={member.picture} alt="" width="220" height="300" /></div>
    </div>
  </div>
);

export default () => (
  <section id="team" className="home-section text-center">
    <div className="heading-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="section-heading">
              <h2>团队介绍</h2>
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
      <h3>董事会成员</h3>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
      }}>
        {board.map(member => (
          <Member member={member} key={member.key}/>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-2 col-lg-offset-5">
          <hr className="marginbot-50" />
        </div>
      </div>
      <h3>管理团队成员</h3>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
      }}>
        {members.map(member => (
          <Member member={member} key={member.key}/>
        ))}
      </div>
    </div>
  </section>
);
