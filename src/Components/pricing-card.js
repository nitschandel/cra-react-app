import React from 'react'
import PricingWrapper from './styles/pricing-card.style'


const PricingCard = (props) => {
    return (
        <PricingWrapper>
            <div className="subscription-card">
                <div className="card-price">
                    <h3>{props.month} Months</h3>
                    <div className='offer'><span className='strikethrough'>₹{props.price}</span>
                        <p className='new-price'>₹{props.offered}</p>
                    </div>
                </div>

                <div className="card-button">
                    <p>{props.MonthlyPrice}/month</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </PricingWrapper>
    )
}

export default PricingCard