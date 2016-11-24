import React from 'react';
import {HomeMenu} from '../components/HomeMenu';
import {Intro} from '../components/Intro';
import {About} from '../components/About';
import {Team} from '../components/Team';
import {Footer} from '../components/Footer';

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
