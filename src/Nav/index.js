import React, { Component } from 'react';

class Nav extends Component{
  constructor(){
    super()

  }

  render(){

    return(
      <div>
        <ul className="topnav" id="myTopnav">
          <li id="home"><a href="/"><img id="logo" src="./logo-v2.png" /></a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Nav
