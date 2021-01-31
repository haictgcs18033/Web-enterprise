import React from 'react'
import contribution from '../assets/img/contributionImg.jpg'
import eyeIcon from '../assets/img/eye-icon.png'

export default function Contribution() {
    return (
        // <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">

        // </div>

        <div className="card">
            <img className="card-img-top" src={contribution} alt="" />
            <div class="overlay"></div>
            <div className="text-center">
                <button type="button" className="contribution-btn">
                    <img src={eyeIcon} /> See Contribution
             </button>
            </div>
            <div className="card-body">
                <h5 className="card-title">This is a contribution</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
            </div>
        </div>

    )
}
