import React from 'react'
import changepasswordImg from '../assets/img/change-password-img.png'

export default function ChangePassword(props) {
   
    return (
        <div className="changepassword-container">
            <div className="row my-4">
                <div>
                    <div className="w-100">
                        <img className="changepassword-img" src={changepasswordImg} alt="123" />
                    </div>
                </div>
                <div className="changepassword-wrapform">
                    <form className="changepassword-form">
                        <h3 className="text-center changepassword-title">Change password</h3>
                        <label className="changepassword-label">Current Password</label>
                        <input
                            className="form-control" />
                        <label className="changepassword-label">Password</label>
                        <input
                            className="form-control" />
                        <label className="changepassword-label">Confirm Password</label>
                        <input
                            className="form-control" />
                        <button className="confirm-btn">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
