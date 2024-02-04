import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
  return (
        <div className="info-cards">
          <span className="info-card-icon">
            <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
          </span>
          <p className="info-card-description">{props.description}</p>
          <button className='card-btn'>{props.buttonInfo}</button>
          <Link to="https://www.google.com/">{props.linkInfo}</Link>
        </div>
  )
}

export default InfoCard