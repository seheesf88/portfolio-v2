import React, { Component } from 'react';

import Profile from '../Profile'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'

class MainContainer extends Component{
  constructor(){
    super()

  }

  render(){

    return(
      <div>
        <section id="profile"><Profile /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    )
  }
}

export default MainContainer

  // window.onscroll = function() {myFunction()};
  //
  // function myFunction() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("myP").className = "test";
  //   } else {
  //     document.getElementById("myP").className = "";
  //   }
  // }
