import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleResetPassword } from '../redux/action/ActionForRedux'

export default function ResetToken(props) {
    let resetToken=props.match.params.resetToken
    let [userReset, setUserReset] = useState({
        resetToken: resetToken,
        newPassword: '' ,
        confirmPassword:''
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
                            <label>Password</label>
                            <input type="text" className="form-control" name="newPassword"
                                value={userReset.newPassword} onChange={handleChange} />
                                <div className="text-danger"></div>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="text" className="form-control" name="confirmPassword"
                                value={userReset.confirmPassword} onChange={handleChange} />
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
