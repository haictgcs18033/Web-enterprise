import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
export default function AdminLogin() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <form className="admin-form p-4">
                        <img className="d-block mx-auto" src={logo}  alt="123" />
                        <h3 className="text-center">FOR ADMIN</h3>
                        <h3 className="text-center"><span className="mr-2">WELCOME</span>TO SIGN IN</h3>
                        <label className="mb-2">Email</label>
                        <input className="form-control" />
                        <div className="mt-5">
                            <label className="mb-2">Password</label>
                            <input className="form-control" />
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <button>SIGN IN</button>
                            </div>
                            <div className="col-6 text-right ">
                                <NavLink to="/" className="permission"> Does not have permission ?</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
