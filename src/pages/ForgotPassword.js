import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleSendMail } from '../redux/action/ActionForRedux'

export default function ForgotPassword() {
    let [emailUser, setEmailUser] = useState({
        email: ''
    })
    const dispatch = useDispatch()
    let handleChange = (e) => {
        setEmailUser({
            email: e.target.value
        })
    }
    let sendEmailReset = () => {
        dispatch(handleSendMail(emailUser))
    }
    console.log(emailUser);
    return (
        <div className="container-forget">
            <div className="row my-4">
                <div>
                    <div className="w-100">
                        <img className="forgetpassword-img" src="./img/forgot-password-1.jpg" alt="123" />
                    </div>
                </div>
                <div className="forget-wrapform">
                    <div className="form-group p-4 forget-form">
                        <h3 className="text-center">FORGOT PASSWORD</h3>
                        <label className="py-3">Email</label>
                        <input
                            type="text"
                            className="form-control my-3"
                            value={emailUser.email}
                            onChange={handleChange} />
                        <button className="text-center mt-4" onClick={() => {
                            sendEmailReset()
                        }}>SEND EMAIL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
