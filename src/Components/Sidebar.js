import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
export default function Sidebar() {
    return (
        <div >
            <div className="sidebar">
                <img src={logo} className={`d-block mx-auto img`} swidth="89px" height="91px" alt="123" />
                <div className="menu">
                    <NavLink to="/admin/dashboard/faculty" className="link" >Faculties</NavLink>
                    <NavLink to="/admin/dashboard/users" className="link">Users</NavLink>
                </div>
            </div>
        </div>
    )
}
