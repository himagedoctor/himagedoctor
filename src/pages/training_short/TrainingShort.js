import React from 'react'
import NavBar from './NavBar'
import Course from './Course'
import Schedule from './Schedule'
import Application from './Application'
import Footer from '../shared/Footer'

class TrainingShort extends React.Component {
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
        <Course />
        <Schedule />
        <Application />
        <Footer />
      </div>
    )
  }
}

export default TrainingShort
