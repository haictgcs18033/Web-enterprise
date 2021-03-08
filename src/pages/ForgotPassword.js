import React from 'react'

export default function ForgotPassword() {
    return (
        // <div className="container wrapper">
        <div className="forgotpassword-container">
            <div className="forgotpassword-grid">
                <img className="forgotpassword-img" src="./img/forgot-password-1.jpg" alt="123" />
                <form className="forgotpassword-form">
                    <h3 className="text-center">FORGOT PASSWORD</h3>
                    <label className="py-3">Email</label>
                    <input type="text" className="form-control my-3" />
                    <button className="text-center mt-4">SEND EMAIL</button>
                </form>
            </div>
        </div>
        // </div>

    )
}
