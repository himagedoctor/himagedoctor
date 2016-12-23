import React from 'react'
//import {Intro} from './Intro';
//import {About} from './About';
//import {Team} from './Team';
import Menu from '../components/home/Menu'
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
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default Home;
