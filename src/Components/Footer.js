import React from 'react'
import logoFooter from '../assets/img/logoFooter.png';
import fbLogo from '../assets/img/fb.png';
import twitterLogo from '../assets/img/twitter.png';
import insLogo from '../assets/img/ins.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-footer" >
                <img class="logo_footer" src={logoFooter} width="129px" height="122px" />
                <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                <div className="contact">
                    <ul className="contact-info mb-0">
                        <li className="contact-style"><a href="">+84123456789</a></li>
                        <li className="contact-style"><a href="">Green.plus@gmail.com</a></li>
                    </ul>
                    <div className="social-media">
                        <img className="social-media__item" src={fbLogo} width="28px" height="33px" />
                        <img className="social-media__item" src={twitterLogo} width="28px" height="33px" />
                        <img className="social-media__item" src={insLogo} width="28px" height="33px" />
                    </div>
                </div>
            </div>
        </div>

    )
}
