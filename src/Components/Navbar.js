import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import navbarToggle from '../assets/img/navbarToggle.jpg'


export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={logo} width="180px" height="145px" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={navbarToggle} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Sign In</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

