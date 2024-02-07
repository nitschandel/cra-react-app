import React from 'react'



const Button = (props) => {
    return (
        <div className="button-card">
            <div className="button-time">
                <h3>{props.date} {props.month}</h3>
                <span>{props.day}</span>
            </div>
        </div>
    )
}

export default Button