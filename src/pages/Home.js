import React from 'react';
import {HomeMenu} from '../components/HomeMenu';
import {Intro} from '../components/Intro';
import {About} from '../components/About';
import {Team} from '../components/Team';
import {Footer} from '../components/Footer';

class Home extends React.Component {
  componentDidMount() {
    // change color on menu
    /*
    $(window).scroll(function() {
  		if ($('.navbar').offset().top > 50) {
  			$('.navbar-fixed-top').addClass('top-nav-collapse');
  		} else {
  			$('.navbar-fixed-top').removeClass('top-nav-collapse');
  		}
  	});
    */
    window.onscroll=function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-nav").classList.add('top-nav-collapse');
      } else {
        document.getElementById("top-nav").classList.remove('top-nav-collapse');
      }
    }
    /*
    $('.navbar-nav li a').bind('click', function(event) {
  		var anchor = $(this).attr('href');
  		if($(this).attr('class') !== 'dropdown-toggle') {
  			$('html, body').stop().animate({
  				scrollTop: $(anchor).offset().top
  			}, 800, function() {
          window.location.hash = anchor;
        });
  		}
  		event.preventDefault();
  	});
    */
    /*
    let menuItems = document.querySelectorAll('ul.navbar-nav li a');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].onClick = function() {
        console.log('click menu');
        document.getElementById('team').scrollIntoView(true);
        return false;
      }
    }
    console.log(menuItems);
    */
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
