import React, { Component } from 'react';

class Skills extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className="skills">
        <h2>Skills</h2>

        <div className="top grid-container">
          <div className="top grid-item">
            <div className="box grid-container">
              <div className="front grid-item">
                <img className="icon" src="./skills/front.png" />
                <div className="label">Front-end</div>
              </div>
              <div className="front grid-item">
                <div className="badges">
                  <span className="badge">JavaScript</span>
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                  <span className="badge">React.js</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">ES6</span>
                  <span className="badge">npm</span>
                  <span className="badge">JQuery</span>
                  <span className="badge">Vanila.js</span>
                  <span className="badge">DOM</span>
                  <span className="badge">Ajax</span>
                  <span className="badge">EJS</span>
                  <span className="badge">JSX</span>
                  <span className="badge">Jinja</span>
                  <span className="badge">Bootstrap</span>
                  <span className="badge">Semenatic UI</span>
                </div>
            </div>
          </div>
        </div>
          <div className="top grid-item">
              <div className="box grid-container">
                <div className="front grid-item">
                  <img className="icon" src="./skills/back.png" />
                  <div className="label">Backend</div>
                </div>
                <div className="front grid-item">
                  <div className="badges">
                    <span className="badge">Python</span>
                    <span className="badge">Flask</span>
                    <span className="badge">Express</span>
                    <span className="badge">API</span>
                    <span className="badge">REST architecture</span>
                    <span className="badge">MVC pattern</span>
                    <span className="badge">CRUD pattern</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">Mongoose</span>
                    <span className="badge">SQLite</span>
                    <span className="badge">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
        </div>


        <div className="bottom grid-container">
          <div className="bottom grid-item">
              <div className="box grid-container">
                <div className="front grid-item">
                  <img className="icon" src="./skills/tools.png" />
                  <div className="label">Tools</div>
                </div>
                <div className="front grid-item">
                  <div className="badges">
                    <span className="badge">Git</span>
                    <span className="badge">Github</span>
                    <span className="badge">CLI</span>
                    <span className="badge">Heroku</span>
                    <span className="badge">Mocha</span>
                    <span className="badge">Atom</span>
                    <span className="badge">Postman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom grid-item">
                <div className="box grid-container">
                  <div className="front grid-item">
                    <img className="icon" src="./skills/skill.png" />
                    <div className="label">Personal skills</div>
                  </div>
                  <div className="front grid-item">
                    <div className="badges">
                      <span className="badge">Korean</span>
                      <span className="badge">Japanese</span>
                      <span className="badge">English</span>
                      <span className="badge">Adaptability</span>
                      <span className="badge">Multi-tasking</span>
                      <span className="badge">Strong Communication</span>
                      <span className="badge">Teamwork</span>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

export default Skills
