import React from 'react'
//
/*
import ins1 from '../../images/insurance/ins1.jpg'
import ins2 from '../../images/insurance/ins2.jpg'
import ins3 from '../../images/insurance/ins3.jpg'
import ins4 from '../../images/insurance/ins4.gif'
import ins5 from '../../images/insurance/ins5.png'
import ins6 from '../../images/insurance/ins6.jpg'
import ins7 from '../../images/insurance/ins7.jpg'
import ins8 from '../../images/insurance/ins8.jpg'
import ins9 from '../../images/insurance/ins9.png'
import ins10 from '../../images/insurance/ins10.jpg'
import ins11 from '../../images/insurance/ins11.jpg'
import ins12 from '../../images/insurance/ins12.jpg'
import ins13 from '../../images/insurance/ins13.jpg'
import ins14 from '../../images/insurance/ins14.jpg'
import ins15 from '../../images/insurance/ins15.jpg'
import ins16 from '../../images/insurance/ins16.jpg'
import ins17 from '../../images/insurance/ins17.jpg'
import ins18 from '../../images/insurance/ins18.jpg'
import ins19 from '../../images/insurance/ins19.jpg'
import ins20 from '../../images/insurance/ins20.jpg'
import ins21 from '../../images/insurance/ins21.gif'
import ins22 from '../../images/insurance/ins22.jpg'
import ins23 from '../../images/insurance/ins23.jpg'
import ins24 from '../../images/insurance/ins24.png'
*/

import axa from '../../images/insurance/axa.png'
import erv from '../../images/insurance/erv.png'
import medilink from '../../images/insurance/medilink.png'
let images = [
  /*
  {original: ins1, key: 1},
  {original: ins2, key: 2},
  {original: ins3, key: 3},
  {original: ins4, key: 4},
  {original: ins5, key: 5},
  {original: ins6, key: 6},
  {original: ins7, key: 7},
  {original: ins8, key: 8},
  {original: ins9, key: 9},
  {original: ins10, key: 10},
  {original: ins11, key: 11},
  {original: ins12, key: 12},
  {original: ins13, key: 13},
  {original: ins14, key: 14},
  {original: ins15, key: 15},
  {original: ins16, key: 16},
  {original: ins17, key: 17},
  {original: ins18, key: 18},
  {original: ins19, key: 19},
  {original: ins20, key: 20},
  {original: ins21, key: 21},
  {original: ins22, key: 22},
  {original: ins23, key: 23},
  {original: ins24, key: 24},
  */
  {original: axa, key: 1},
  {original: erv, key: 2},
  {original: medilink, key: 3},
];
/*
for (let i = 1; i <= 6; i++) {
  images.push({original: eval(`ins${i}`), key: i});
}
*/

const Thumbnail = ({picture}) => (
  <div className="col-xs-6 col-md-3">
    <a href="#" className="thumbnail">
      <img src={picture.original} alt="insurance" />
    </a>
  </div>
)

const Insurance = (props) => {
  return (
    <section id="insurance" className="home-section text-center">
      <div className="heading-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="section-heading">
                <h2>合作保险</h2>
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
