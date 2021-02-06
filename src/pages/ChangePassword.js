import React from 'react'
import changepasswordImg from '../assets/img/FormWrap.png'

export default function ChangePassword() {
    return (
        <div className="container wrapper">
            <div className="changepassword-container">
                <div className="changepassword-grid">

                    <img className="changepassword-img" src={changepasswordImg} alt="123" />
                    <form class="changepassword-form">
                        <h3 className="text-center changepassword-title">Change password</h3>
                        <label className="changepassword-label">Current Password</label>
                        <input
                            class="form-control" />
                        <label className="changepassword-label">Password</label>
                        <input
                            class="form-control" />
                        <label className="changepassword-label">Confirm Password</label>
                        <input
                            class="form-control" />
                        <button className="confirm-btn">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
