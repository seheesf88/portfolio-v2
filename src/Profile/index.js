import React, { Component } from 'react';

import Nav from '../Nav'

class Profile extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <Nav />
        <div id="propic"><img src="./profile/profile-v2.png" style={{height: 120, width:120}}/></div>
        <div className="intro">
          <p>Hi, nice to meet you! I am highly self-motivated junior full stack web developer who loves to learn code.</p>
          <p>I have worked in the hospitality industry and medical fields for 10 years and have gained various experiences and skills in how to work in part of team and in a fast-paced work environment.</p>
          <p>I strongly believe that I can perform amazing work by dedicating my professional technics and experiences.</p>
        </div>
      </div>
    )
  }
}

export default Profile
