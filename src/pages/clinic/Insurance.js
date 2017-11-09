import React from 'react'

import axa from '../../images/insurance/axa.png'
import erv from '../../images/insurance/erv.png'
import medilink from '../../images/insurance/medilink.png'
import aetna from '../../images/insurance/aetna.png'
import allianz from '../../images/insurance/allianz.png'
import bluecross from '../../images/insurance/bluecross.png'
import bupa from '../../images/insurance/bupa.png'
import covermore from '../../images/insurance/covermore.png'
import ea from '../../images/insurance/ea.png'
import falck from '../../images/insurance/falck.png'
import general from '../../images/insurance/general.png'
import geoblue from '../../images/insurance/geoblue.png'
import henner from '../../images/insurance/henner.png'
import hth from '../../images/insurance/hth.png'
import img from '../../images/insurance/img.png'
import msh from '../../images/insurance/msh.png'
import sos from '../../images/insurance/sos.png'
import uhg from '../../images/insurance/uhg.png'
let images = [
  {original: axa, key: 1},
  {original: erv, key: 2},
  {original: medilink, key: 3},
  {original: aetna, key: 4 },
  {original: allianz, key: 5},
  {original: bluecross, key: 6},
  {original: bupa, key: 7},
  {original: covermore, key: 8},
  {original: ea, key: 9},
  {original: falck, key: 10},
  {original: general, key: 11},
  {original: geoblue, key: 12},
  {original: henner, key: 13},
  {original: hth, key: 14},
  {original: img, key: 15},
  {original: msh, key: 16},
  {original: sos, key: 17},
  {original: uhg, key: 18},
];

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
