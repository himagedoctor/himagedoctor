import React from 'react'
import Menu from '../components/home/Menu'
import Intro from '../components/home/Intro'
import About from '../components/home/About'
import Team from '../components/home/Team'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends React.Component {
  componentWillMount () {
    if (typeof window !== 'undefined') {
      require('smoothscroll-polyfill').polyfill()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Menu />
        <About />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default Home;
