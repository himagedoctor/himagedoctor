import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CharityNavBar from '../../components/charity/CharityNavBar'
import Mainland from '../../components/charity/Mainland'
import Foreign from '../../components/charity/Foreign'
import Contact from '../../components/charity/Contact'

class Charity extends React.Component {
  /*
  componentDidMount() {
    window.onscroll=function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-nav").classList.add('top-nav-collapse');
      } else {
        document.getElementById("top-nav").classList.remove('top-nav-collapse');
      }
    }
  }
  */
  render() {
    return (
      <div>
        <Header />
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
