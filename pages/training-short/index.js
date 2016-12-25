import React from 'react'
import NavBar from '../../components/training-short/NavBar'
import Course from '../../components/training-short/Course'
import Schedule from '../../components/training-short/Schedule'
import Application from '../../components/training-short/Application'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class TrainingShort extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
