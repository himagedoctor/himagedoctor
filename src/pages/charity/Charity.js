import React, { PropTypes } from 'react'
import Nav from './Nav'
import Mainland from './Mainland'
import Foreign from './Foreign'
import Footer from '../shared/Footer'

const Charity = (props) => {
  return (
    <div>
      <Nav />
      <Mainland />
      <Foreign />
      <Footer />
    </div>
  )
}

export default Charity
