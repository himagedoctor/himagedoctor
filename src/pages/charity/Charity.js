import React, { PropTypes } from 'react'
import CharityNavBar from './CharityNavBar'
import Mainland from './Mainland'
import Foreign from './Foreign'
import Contact from './Contact'
import Footer from '../shared/Footer'

class Charity extends React.Component {
  componentDidMount() {
    window.onscroll=function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-nav").classList.add('top-nav-collapse');
      } else {
        document.getElementById("top-nav").classList.remove('top-nav-collapse');
      }
    }
  }
  render() {
    return (
      <div>
        <CharityNavBar />
        <Mainland />
        <Foreign />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Charity
