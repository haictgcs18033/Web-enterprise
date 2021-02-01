import React from 'react'
import Background from '../Components/Background'
import Contribution from '../Components/Contribution'
import notifyIcon from '../assets/img/notifyIcon.png'
import trendingIcon from '../assets/img/trending-icon.png'
import Trending from '../Components/Trending'

export default function HomePage() {
    return (
        <div>
            <Background></Background>
            <div className="container">
                <h2 className="trend-title"><span> <img className="trend-icon" src={trendingIcon} /></span>Now Treding</h2>
                <div className="box">
                    <div className="grid">
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                    </div>
                </div>
                <h2 className="contribution-title"><span> <img className="notify-icon" src={notifyIcon} /></span>New Contributions</h2>
                <div className="box">
                    <div className="grid">
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                    </div>
                </div>



                <div className="text-center">
                    <button type="button" className="show-btn">show more</button>
                </div>
            </div>


        </div>
    )
}