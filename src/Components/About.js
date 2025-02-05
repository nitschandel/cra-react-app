import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutWrapper from './styles/about.style';

const About = (props) => {
  return (
    <AboutWrapper>
      <div className="about-text-step">
        <p className="about-text-sTitle">
          <div >
            <span className='about-details'>

              <FontAwesomeIcon className="fa-icon" icon={props.iconName} />
              <p className="about-text-description">{props.description}</p>
            </span>
          </div>
        </p>

      </div>
    </AboutWrapper>
  )
}

export default About;