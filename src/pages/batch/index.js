import React, { useEffect } from 'react';
import BatchWrapper from './styles/batch.style.js';
import { Link } from 'react-router-dom';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'; import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlotButton from '../../Components/SlotButton';
import ButtonCard from '../../Components/ButtonCard.js';
import pic1 from "../../Components/Assets/pic1.jpg";
function Batch(props) {

    return <BatchWrapper>
        <div className='slot'>
            <h2>Yoga for Mind</h2>
            <div className="slot-image-content">
            </div>
        <h2>What is Yoga for Mind?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequuntur. ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente? Dicta voluptate sit laborum fuga possimus atque eius minima assumenda!</p>
        <div className='arrows'>
            <Link to="/">Yoga</Link>
            <FontAwesomeIcon className="icon1" icon={faCaretRight} />
            <Link to="/product">Yoga For Mind</Link>
            <FontAwesomeIcon className="icon1" icon={faCaretRight} />
            <Link to="#">Package</Link>
        </div>
        <h2>1 Month Yoga for Mind</h2>
        <div className='change-plan'>
            <span>5 days a week</span>
            <Link to="/product">Change Plan</Link>
        </div>
        <h3>Pick a start date</h3>
        <p>Dates are available only for the next 2 weeks</p>
        <div className='booking'>
            <div className='slot-button'>
                <FontAwesomeIcon className="icon1" icon={faCaretLeft} />
                <ButtonCard
                    date="29th"
                    month="Jan"
                    day="Mon"
                />
                <ButtonCard
                    date="30th"
                    month="Jan"
                    day="Tue"
                />
                <ButtonCard
                    date="31st"
                    month="Jan"
                    day="Wed"
                />
                <ButtonCard
                    date="1st"
                    month="Feb"
                    day="Thur"
                />
                <ButtonCard
                    date="2nd"
                    month="Feb"
                    day="Fri"
                />
                <ButtonCard
                    date="3rd"
                    month="Feb"
                    day="Sat"
                />
                <ButtonCard
                    date="4th"
                    month="Feb"
                    day="Sun"
                />
                <ButtonCard
                    date="4th"
                    month="Feb"
                    day="Sun"
                />
                <ButtonCard
                    date="4th"
                    month="Feb"
                    day="Sun"
                />
                <ButtonCard
                    date="4th"
                    month="Feb"
                    day="Sun"
                />
                <FontAwesomeIcon className="icon1" icon={faCaretRight} />
            </div>
            <div className='week-button'>
            <h2>Select Time Slot</h2>
            
            <SlotButton
                time1="5:00"
                meridean1="PM"
                time2="6:00"
                meridean2="PM"
            />
            <SlotButton
                time1="8:00"
                meridean1="AM"
                time2="9:00"
                meridean2="AM"
            />
            </div>
        </div>
        <button>Buy Package</button>
    </div>

    </BatchWrapper >
}

export default Batch;