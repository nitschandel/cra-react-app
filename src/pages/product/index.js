import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as AuthUtils from '../../utils/auth.js';
import ProductWrapper from './styles/product.style.js';
import pic1 from "./Assets/pic1.jpg"
import PricingCard from './PricingCard'
import About from './About'
import { faClock, faComment } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
   
    return <ProductWrapper>
        <div className='product-page'>
            <div className="about-section" >
                <h2>Yoga for Mind</h2>
                <div className="about-image-content">

                    <img src={pic1} alt="Doctor Group" className="about-image1" />
                </div>

                <div className="about-text-content">
                    <p className="about-title">
                        What is Yoga for Mind?
                    </p>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus earum, ea repellat aspernatur at. ipsum dolor sit amet consectetur adipisicing elit. Sed, a! ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis, dolorum eveniet quaerat aspernatur expedita voluptatibus neque, nulla minima iusto illum eius, deleniti dolore ullam!
                    </p>
                </div>
            </div>


            <div className='pricing-cards'>
                <h2 className="about-text-title">Choose your package</h2>
                <div className='offer-cards'>
                <PricingCard 
                    month="6"
                    price="12999"
                    offered="5499"
                    MonthlyPrice="916"
                />
                <PricingCard
                    month="3"
                    price="5999"
                    offered="2999"
                    MonthlyPrice="999"
                />
                <PricingCard
                    month="1"
                    price="1999"
                    offered="1199"
                    MonthlyPrice="1199"
                />
                </div>
                
                <h2 className="about-text-title">What you'll get</h2>
                <About
                iconName={faComment}
                description="A chat group on the Elda app where you can connect with your trainer and the rest of the Elda Yoga Community"
                />
                <About
                iconName={faClock}
                description="Ability to reschedule your class if you miss your session"
                />
            </div>
        </div>
    </ProductWrapper>
}

export default Product;