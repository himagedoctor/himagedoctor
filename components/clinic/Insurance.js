import React from 'react'

const Thumbnail = ({picture}) => (
  <div className="col-xs-6 col-md-3">
    <a href="#" className="thumbnail">
      <img src={picture.original} alt="insurance" />
    </a>
  </div>
)

const Insurance = (props) => {
  const images = [
    {original: '/static/insurance/ins1.jpg', key: 1},
    {original: '/static/insurance/ins2.jpg', key: 2},
    {original: '/static/insurance/ins3.jpg', key: 3},
    {original: '/static/insurance/ins4.gif', key: 4},
    {original: '/static/insurance/ins5.png', key: 5},
    {original: '/static/insurance/ins6.jpg', key: 6},
    {original: '/static/insurance/ins7.jpg', key: 7},
    {original: '/static/insurance/ins8.jpg', key: 8},
    {original: '/static/insurance/ins9.png', key: 9},
    {original: '/static/insurance/ins10.jpg', key: 10},
    {original: '/static/insurance/ins11.jpg', key: 11},
    {original: '/static/insurance/ins12.jpg', key: 12},
    {original: '/static/insurance/ins13.jpg', key: 13},
    {original: '/static/insurance/ins14.jpg', key: 14},
    {original: '/static/insurance/ins15.jpg', key: 15},
    {original: '/static/insurance/ins16.jpg', key: 16},
    {original: '/static/insurance/ins17.jpg', key: 17},
    {original: '/static/insurance/ins18.jpg', key: 18},
    {original: '/static/insurance/ins19.jpg', key: 19},
    {original: '/static/insurance/ins20.jpg', key: 20},
    {original: '/static/insurance/ins21.gif', key: 21},
    {original: '/static/insurance/ins22.jpg', key: 22},
    {original: '/static/insurance/ins23.jpg', key: 23},
    {original: '/static/insurance/ins24.png', key: 24},
  ];
  return (
    <section id="insurance" className="home-section text-center">
      <div className="heading-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>合作保险</h2>
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
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-around'
        }}>
          {images.map(image => (
            <Thumbnail picture={image} key={image.key} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insurance
