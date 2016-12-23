import React from 'react'
import Menu from '../components/home/Menu'
import Intro from '../components/home/Intro'
import About from '../components/home/About'
import Team from '../components/home/Team'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends React.Component {
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
