import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Projects extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className="projects">
        <h2>Projects</h2>
        <div className="card grid-container">

          <div className="card grid-item">
            <img src="./projects/mytripplanner.png" className="pic"/>
            <h4>My Trip Planner</h4>
            <div className="description">
              This application is what a user can use to plan and manage a trip budget and itinerary. The user can share this information with other users. This app includes a calendar and budget calculator.
            </div>
            <div className="links ">
              <div className="link"><img src="./projects/heroku.png" className="heroku" /><a href="https://react-tripplanner.herokuapp.com" className="aheroku">My Trip Planner</a></div>
              <div>
                <span><SocialIcon network="github" style={{ height: 25, width: 25 }} bgColor="#203960" /></span>
                <span><a href="https://git.generalassemb.ly/seheesf88/react-project5" className="frontend">Front-end</a></span>
                <span className="divider">|</span>
                <span><a href="https://git.generalassemb.ly/seheesf88/project5-back-end" className="backend">Backend</a></span>
              </div>
            </div>
            <div className="pro badges">
              <span className="pro badge">JavaScript</span>
              <span className="pro badge">React</span>
              <span className="pro badge">npm</span>
              <span className="pro badge">MongoDB</span>
              <span className="pro badge">Mongoose</span>
              <span className="pro badge">Session</span>
              <span className="pro badge">RESTful API</span>
              <span className="pro badge">CRUD pattern</span>
              <span className="pro badge">Ajax</span>
              <span className="pro badge">Bootstraps</span>
              <span className="pro badge">CSS</span>
              <span className="pro badge">Semantic UI</span>
              <span className="pro badge">JSX</span>
            </div>
          </div>
          <div className="card grid-item">
            <img src="./projects/seestar.png" className="pic"/>
            <h4>SeeStar</h4>
            <div className="description">This application is a clone Instagram app. The user can post and share their pictures and stories and view other user's pictures and story. Users also can add comments to other user's posting.</div>
            <div className="links">
              <div className="link"><img src="./projects/heroku.png" className="heroku" /><a href="https://star-frontend.herokuapp.com" className="aheroku">SeeStar</a></div>
              <div>
                <span><SocialIcon network="github" style={{ height: 25, width: 25 }} bgColor="#203960" /></span>
                <span><a href="https://git.generalassemb.ly/seheesf88/project4" className="frontend">Front-end</a></span>
                <span className="divider">|</span>
                <span><a href="https://git.generalassemb.ly/seheesf88/project4-backend" className="backend">Backend</a></span>
              </div>
            </div>
            <div className="pro badges">
              <span className="pro badge">JavaScript</span>
              <span className="pro badge">Python</span>
              <span className="pro badge">React</span>
              <span className="pro badge">Flask</span>
              <span className="pro badge">PostgreSQL</span>
              <span className="pro badge">CRUD pattern</span>
              <span className="pro badge">Ajax</span>
              <span className="pro badge">Bootstraps</span>
              <span className="pro badge">CSS</span>
              <span className="pro badge">Semantic UI</span>
              <span className="pro badge">JSX</span>
            </div>
          </div>
          <div className="card grid-item">
            <img src="./projects/flighttracker.png" className="pic"/>
            <h4>Flight Tracker</h4>
            <div className="description">
              This application is for a user to track flights and share reports about delays. The user can search flights by entering flight numbers and see flight information and reports about delays from other users.
            </div>
            <div className="links">
              <div className="link"><img src="./projects/heroku.png" className="heroku" /><a href="https://flight-react.herokuapp.com/" className="aheroku">Flight Tracker</a></div>
              <div>
                <span><SocialIcon network="github" style={{ height: 25, width: 25 }} bgColor="#203960" /></span>
                <span><a href="https://git.generalassemb.ly/seheesf88/project3-flight-react" className="frontend">Front-end</a></span>
                <span className="divider">|</span>
                <span><a href="https://git.generalassemb.ly/seheesf88/project3-flight-api" className="backend">Backend</a></span>
              </div>
            </div>
            <div className="pro badges">
              <span className="pro badge">JavaScript</span>
              <span className="pro badge">React</span>
              <span className="pro badge">npm</span>
              <span className="pro badge">RESTful API</span>
              <span className="pro badge">MongoDB</span>
              <span className="pro badge">Moongose</span>
              <span className="pro badge">Ajax</span>
              <span className="pro badge">CRUD pattern</span>
              <span className="pro badge">Bootstrap</span>
              <span className="pro badge">CSS</span>
              <span className="pro badge">JSX</span>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Projects
