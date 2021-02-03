import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className="container-login">
            <div className="row my-4">
                <div className=" col-lg-5 col-xl-5 px-0">
                    <div className="w-100">
                        <img src="/img/cover-1.jpg" alt="123" />
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-7 col-xl-7 px-0">
                    <form className="login-form p-4">
                        <h3 className="text-center mb-4" > <span >WELCOME</span> TO SIGN IN</h3>
                        <label>Email</label>
                        <input className="form-control" />
                        <div className="mt-5">
                            <label>Password</label>
                            <input className="form-control" />
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <button>SIGN IN</button>
                            </div>
                            <div className="col-6 text-right forget-password">
                                <NavLink to="/forget-password"> Forgot your password ?</NavLink>
                              </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
