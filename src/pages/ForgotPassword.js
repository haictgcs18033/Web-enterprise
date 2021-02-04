import React from 'react'

export default function ForgotPassword() {
    return (
        <div className="container-forget">
            <div className="row">
                <div className="col-lg-4 col-xl-4 image">
                    <img src="./img/forgot-password-1.jpg" alt="123" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="form-group p-4 forget-form">
                        <h3 className="text-center">FORGOT PASSWORD</h3>
                        <label className="py-3">Email</label>
                        <input type="text" className="form-control my-3" />
                        <button className="text-center mt-4">SEND EMAIL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
