import React from 'react'
import NavBar from './NavBar'
import Mission from './Mission'
import Visit from './Visit'
import Insurance from './Insurance'
import Footer from '../shared/Footer'

class Clinic extends React.Component {
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
        <NavBar />
        <Mission />
        <Visit />
        <Insurance />
        <Footer />
      </div>
    )
  }
}

export default Clinic
