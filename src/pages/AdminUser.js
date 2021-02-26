import React from 'react'
import logo from '../assets/img/logo.jpg'
import UserAvt from '../assets/img/user-avt.png'
import SearchIcon from '../assets/img/search-icon.png'

export default function AdminUser() {
    return (
        <div>
            <div className="side-bar">
                <div className="logo__admin">
                    <img src={logo} alt="123" /> 
                </div>
                <a className="d-flex align-items-center" href="#">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="icon" d="M19 8H1C0.448 8 0 8.447 0 9V23C0 23.553 0.448 24 1 24H19C19.552 24 20 23.553 20 23V9C20 8.447 19.552 8 19 8ZM15 15C15 15.553 14.552 16 14 16H6C5.448 16 5 15.553 5 15V12H7V14H13V12H15V15Z" fill="#808191" />
                        <path className="icon" d="M18 4H2V6H18V4Z" fill="#808191" />
                        <path className="icon" d="M15 0H5V2H15V0Z" fill="#808191" />
                    </svg>
                    <span>Faculties</span>
                </a>
                <a className="d-flex align-items-center" href="#">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="icon" d="M11 13C14.309 13 17 10.309 17 7V6C17 2.691 14.309 0 11 0C7.691 0 5 2.691 5 6V7C5 10.309 7.691 13 11 13Z" fill="#808191" />
                        <path className="icon" d="M18.322 15.981C13.618 14.678 8.383 14.678 3.678 15.981C1.513 16.581 0 18.564 0 20.805V24H22V20.805C22 18.564 20.487 16.581 18.322 15.981Z" fill="#808191" />
                    </svg>
                    <span>Users</span>
                </a>
            </div>
            <div className="container-admin">
                <div className="user-info">
                    <div className="user-name">Lee Cong Minh</div>
                    <img className="user-avt" src={UserAvt}></img>
                </div>
                <div className="users-management">
                    <h3 className="user-title">Users</h3>
                    <button className="create-btn">
                        Create
                    </button>
                </div>
                <div className="user-form">
                    <div className="search-role">
                        <div className="row">
                            <div className="col-9">

                                <input
                                    type="text"
                                    name=""
                                    placeholder="Search tao di" />
                                <img
                                    className="search-icon"
                                    src={SearchIcon} />
                            </div>
                            <div className="col-3">
                                <select class="role-select" name="role" id="">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
