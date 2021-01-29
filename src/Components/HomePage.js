import React from 'react'
import navbarToggle from '../assets/Rectangle36.jpg'
import logo from '../assets/logo.jpg'
import contribution from '../assets/contributionImg.jpg'
import eyeIcon from '../assets/eye-icon.png'
import logoFooter from '../assets/logoFooter.jpg';
import fbLogo from '../assets/fbLogo.jpg';
import twitterLogo from '../assets/twitterLogo.jpg';
import insLogo from '../assets/insLogo.jpg';


export default function Login() {
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={navbarToggle} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="background">
                <div className="bg-content">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="container">
                <h2 className="title mt-32">Impressive Contributions</h2>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card mt-24">
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
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card mt-24">
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
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card mt-24">
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
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card mt-24">
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
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card mt-24">
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
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card mt-24">
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
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="show-btn mt-32">show more</button>
                </div>
            </div>

            <div className="container-footer">


                <img class="logo_footer" src={logoFooter} />


                <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>


                <div className="contact">
                    <ul className="contact-info">
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

        </div>
    )
}