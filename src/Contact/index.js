import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Collapse, Button, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Contact extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className="contact">
        <h2>Conatct</h2>
        <div className="contact grid-container">
          <div className="contact grid-item">
            <div className="namecard">
              <div>SeHee Son</div>
              <div>San Francisco, CA</div>
              <div>seheesf88@gmail.com</div>
            </div>

            <div>
              <span>
                <a href="mailto:seheesf88@gmail.com" data-tooltip="hi?">
                <img src="./contact/envelope.png" id="emailIcon"/>
                </a>
                <span className="mailtext"><a href="mailto:seheesf88@gmail.com" data-tooltip="hi?" id="mailtext">Email me</a></span>
              </span>

              <span className="divider" id="divider">|</span>

              <span className="github">
                <OverlayTrigger
                  key='bottom'
                  placement='bottom'
                  overlay={
                    <Tooltip className="tooltip">
                      see my code?
                    </Tooltip>
                  }
                >
                  <SocialIcon network="github" style={{ height: 40, width: 40 }} bgColor="#DFD9D9" url="https://git.generalassemb.ly/seheesf88" />
                </OverlayTrigger>
                <a href="https://git.generalassemb.ly/seheesf88" className="githubtext">Github</a>
              </span>

              <span className="divider" id="divider">|</span>

              <span className="linkedin">
                <OverlayTrigger
                  key='bottom'
                  placement='bottom'
                  overlay={
                    <Tooltip className="tooltip">
                      know more about me?
                    </Tooltip>
                  }
                >
                  <SocialIcon style={{ height: 40, width: 40 }} bgColor="#DFD9D9" url="http://linkedin.com/in/sehee-son/" />
                </OverlayTrigger>
                <a href="https://git.generalassemb.ly/seheesf88/" className="linkedintext">linkedin</a>
              </span>

              <span className="divider" id="divider">|</span>

              <span>
              <OverlayTrigger
                key='bottom'
                placement='bottom'
                overlay={
                  <Tooltip className="tooltip">
                    Download my resume
                  </Tooltip>
                }
              >
                <a href="../Resume_SeHee_Son.pdf" download><img src="./contact/download.png" style={{ height: 36, width: 38 }} id="download"/></a>
              </OverlayTrigger>
              <a href="/" download className="download">Download Resume</a>
              </span>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
