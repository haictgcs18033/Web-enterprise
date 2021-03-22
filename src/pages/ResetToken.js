import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleResetPassword } from '../redux/action/ActionForRedux'

export default function ResetToken() {
    let [userReset, setUserReset] = useState({
        resetToken: '',
        newPassword: ''
    })
      let dispatch= useDispatch()
    let handleChange = (e) => {
        let { value, name } = e.target
        setUserReset({ ...userReset, [name]: value })
    }
    console.log(userReset);
    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleResetPassword(userReset))
    }
    return (  
        <div className="container my-5" >
            <div className="change-password-container">
                <form className="change-password text-left" onSubmit={handleSubmit}>
                    <h3>Change Password</h3>
                    <div className="" >
                        <div className="form-group">
                            <label>Token</label>
                            <input type="text" className="form-control" name="resetToken"
                                value={userReset.resetToken} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="text" className="form-control" name="newPassword"
                                value={userReset.newPassword} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Confirm</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}
