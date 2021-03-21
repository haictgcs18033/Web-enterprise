import React from 'react'
import contribution from '../assets/img/contribution.png'
import eyeIcon from '../assets/img/eye-icon.png'

export default function Contribution() {
    return (
        // {contributions.map((contribution)=> (

        //  ))}
        <div className="card">
            <img className="card-img-top" src={contribution} alt="123" />
            <div className="overlay"></div>
            <div className="text-center">
                <button type="button" className="contribution-btn">
                    <img className="eye-icon" src={eyeIcon} alt="123" /> See Contribution
                    </button>
            </div>
            <div className="card-body">
                <h4 className="card-title">This is a contribution</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
            </div>
        </div>
    )
}
