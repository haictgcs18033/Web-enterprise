import React from 'react'

import Background from '../Components/Background'
import notifyIcon from '../assets/img/notifyIcon.png'
import trendingIcon from '../assets/img/trending-icon.png'
import NewContributions from '../Components/NewContributions/NewContributions'
import Trendings from '../Components/Trendings/Trendings'

export default function HomePage(props) {

    return (
        <div>
            <Background></Background>
            <div className="container">
                <h2 className="trend-title">
                    <span><img className="trend-icon" src={trendingIcon} alt="123" /></span>
                    Now Treding
                </h2>
                <Trendings />
            </div>
            <div className="container">
                <h2 className="contribution-title">
                    <span><img className="notify-icon" src={notifyIcon} alt="123" /></span>
                    New Contributions
                </h2>
                <NewContributions />
                <div className="text-center">
                    <button type="button" className="show-btn">show more</button>
                </div>
            </div>
        </div >
    )
}