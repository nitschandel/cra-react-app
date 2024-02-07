import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SlotButton = (props) => {
    return (
        <div className="time-card">
            <div className="time-slot">
                <div className='clock'>
                    <FontAwesomeIcon className="icon2" icon={faClock} />
                    <h4>{props.time1} {props.meridean1}-{props.time2} {props.meridean2}</h4>
                </div>
                <div className='week'>
                    <p className='week-days'>Mon,Tue,Wed,Thur,Fri</p>
                </div>
            </div>
        </div>
    )
}

export default SlotButton