import React from 'react'
//import {HomeMenu} from '../components/HomeMenu';
//import {Intro} from './Intro';
//import {About} from './About';
//import {Team} from './Team';
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
        {/*
        <HomeMenu />
        */}
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
