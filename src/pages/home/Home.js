import React from 'react';
import {HomeMenu} from './HomeMenu';
import {Intro} from './Intro';
import {About} from './About';
import {Team} from './Team';
import Footer from '../shared/Footer';

class Home extends React.Component {
  componentDidMount() {
    // change color on menu
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
        <HomeMenu />
        <Intro />
        <About />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default Home;
