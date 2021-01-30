import React from 'react'
import logoFooter from '../assets/logoFooter.jpg';
import fbLogo from '../assets/fbLogo.jpg';
import twitterLogo from '../assets/twitterLogo.jpg';
import insLogo from '../assets/insLogo.jpg';

export default function Footer() {
    return (
        <div className="container-footer" >
            <img class="logo_footer" src={logoFooter} />
            <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
            <div className="contact">
                <ul className="contact-info mb-0">
                    <li><a href="">+84123456789</a></li>
                    <li><a href="">Green.plus@gmail.com</a></li>
                </ul>
                <div className="social-media">
                    <img className="social-media__item" src={fbLogo} />
                    <img className="social-media__item" src={twitterLogo} />
                    <img className="social-media__item" src={insLogo} />
                </div>
            </div>
        </div>
    )
}
