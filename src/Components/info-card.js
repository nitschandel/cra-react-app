import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
  return (
    <div className="info-cards">
      <div className='info-icon'>
        <span className="info-card-icon">
          <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
        </span>
      </div>
      <p className="info-card-description">{props.description}</p>
      {/* Conditionally render the button if buttonInfo prop is provided */}
      {props.buttonInfo && <button className='card-btn'>{props.buttonInfo}</button>}
      {/* Conditionally render the link if linkInfo prop is provided */}
      {props.linkInfo && <Link to={props.linkInfo}>I have a question</Link>}
    </div>
  )
}

export default InfoCard