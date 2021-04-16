import React from 'react'
import logoFooter from '../assets/img/logoFooter.png';
import fbLogo from '../assets/img/fb.png';
import twitterLogo from '../assets/img/twitter.png';
import insLogo from '../assets/img/ins.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-footer" >
                <img className="logo_footer" src={logoFooter} width="129px" height="122px" alt="123" />
                <p className="description">A system for collecting student contributions for an annual university magazine</p>
                <div className="contact">
                    <ul className="contact-info mb-0">
                        <li className="contact-style"><p>+84123456789</p></li>
                        <li className="contact-style"><p>Green.plus@gmail.com</p></li>
                    </ul>
                    <div className="social-media">
                        <a href="https://www.facebook.com/le.congminh.564">
                            <img className="social-media__item" src={fbLogo} width="28px" height="33px" alt="123" />
                        </a>
                        <a href="https://twitter.com/HaiCao28747776">
                            <img className="social-media__item" src={twitterLogo} width="28px" height="33px" alt="123" />
                        </a>

                        <img className="social-media__item" src={insLogo} width="28px" height="33px" alt="123" />
                    </div>
                </div>
            </div>
        </div>

    )
}
