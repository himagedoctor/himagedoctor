import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/clinic/Menu'
import Mission from '../../components/clinic/Mission'
import Visit from '../../components/clinic/Visit'
import Insurance from '../../components/clinic/Insurance'
import Footer from '../../components/Footer'

class Clinic extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Mission />
        <Visit />
        <Insurance />
        <Footer />
      </div>
    )
  }
}

export default Clinic
