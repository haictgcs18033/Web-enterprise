import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import navbarToggle from '../assets/img/navbarToggle.jpg'


export default function Navbar() {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    let logout=()=>{
        window.localStorage.clear()
    }
    let renderNavbar = (userRole) => {
        switch (userRole) {
            case 'STUDENT': {
                return <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {userLogin.user.fullName}
                            </p>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/student/upload-contribution">Upload Contribution</NavLink>
                                <NavLink className="dropdown-item" to="/changepassword">Change Password</NavLink>
                                <div className="dropdown-divider" />
                                <NavLink className="dropdown-item" to="/login"
                                onClick={()=>{
                                    logout()
                                }}>Logout</NavLink>
                            </div>
                        </li>

                    </ul>
                </div>
            }
            case 'MARKETING_CORDINATOR': {
                return <p>Hello cordinator</p>
            }
            default: {
                return <p>Error</p>
            }
        }

    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img className="logo" src={logo} width="180px" height="145px" alt="123" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={navbarToggle} alt="123" />
                </button>
                {localStorage.getItem('USER_LOGIN') ?
                    renderNavbar(userLogin.user.role) :
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Sign In</NavLink>
                            </li>
                        </ul>
                    </div>}
            </nav>
        </div>
    )
}

