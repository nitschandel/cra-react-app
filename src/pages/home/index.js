import React, { useEffect } from 'react';
import HomeWrapper from './styles/home.style.js';
import { useNavigate } from 'react-router-dom';
import * as AuthUtils from '../../utils/auth';

function Home(props) {
   
    return <HomeWrapper>
        <p>Foo Bar</p>
    </HomeWrapper>
}

export default Home;