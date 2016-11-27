import React from 'react'
import NavBar from './NavBar'
import Intro from './Intro'
import Faculty from './Faculty'
import Students from './Students'
import Partners from './Partners'
import Footer from '../shared/Footer'

class TrainingLong extends React.Component {
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
        <Intro />
        <Faculty />
        <Students />
        <Partners />
        <Footer />
      </div>
    )
  }
}

export default TrainingLong
