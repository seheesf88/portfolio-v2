import React, { Component } from 'react';

class Nav extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <ul className="topnav">
          <li><a href="#">About me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Nav
