import React, { useEffect } from 'react';
import HomeWrapper from './styles/home.style.js';
import { faHeartPulse, faBed, faBan } from "@fortawesome/free-solid-svg-icons";
import InfoCard from '../../components/info-card.js';
import { Link } from 'react-router-dom';

function Home(props) {

    return <HomeWrapper>
        <div className="info-section" id="services">
            <div className="info-title-content">
                <div className='title'>
                    <p className="info-title">
                        Yoga for Mind
                    </p>

                    <p className="info-description">
                        Watch our Lead Yoga Therapist, <Link to="https://www.youtube.com/watch?v=hJbRpHZr_d0&pp=ygUTeW9nYSB2aWRlbyBmb3IgbWluZA%3D%3D">Ms Uma Subramaniam</Link> explain Yoga for Mind
                    </p>
                </div>

                <div className='video'>

                    <iframe className='thumbnail'
                        src="https://www.youtube.com/embed/hJbRpHZr_d0?si=R12RmmveWdTzStse"
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='tagline'><span>is this for you?</span></div>

            <div className="info-cards-content">
                <InfoCard
                    description="Hard to feel calm or sleep because of stress?"
                    icon={faBed}
                    buttonInfo="Book trial @ 99"
                />

                <InfoCard
                    description="If you have palpitations and breathing trouble"
                    icon={faHeartPulse}
                    buttonInfo="I want to buy"
                />

                <InfoCard
                    description="You have been advised by doctors to avoid physical activity"
                    icon={faBan}
                    linkInfo="I have a question"
                />
            </div>
        </div>
    </HomeWrapper>
}

export default Home;