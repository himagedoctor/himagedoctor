import React from 'react'
import NavBar from '../../components/training-long/NavBar'
import Intro from '../../components/training-long/Intro'
import Faculty from '../../components/training-long/Faculty'
import Students from '../../components/training-long/Students'
import Partners from '../../components/training-long/Partners'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class TrainingLong extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
