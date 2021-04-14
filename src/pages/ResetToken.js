import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleResetPassword } from '../redux/action/ActionForRedux'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';

export default function ResetToken(props) {
    let resetToken = props.match.params.resetToken
    let [userReset, setUserReset] = useState({
        resetToken: resetToken,
        newPassword: '',
        confirmPassword: ''
    })

    let dispatch = useDispatch()
    let handleChange = (e) => {
        let { value, name } = e.target
        setUserReset({ ...userReset, [name]: value })
    }

    let onSubmit = (data) => {
        dispatch(handleResetPassword(userReset));
        reset({
            newPassword: "",
            confirmPassword: ""
        })
    }

    let validationSchema = yup.object().shape({
        newPassword: yup.string()
            .required('⚠ Password is required')
            .max(255, '⚠ New password is too long')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,}$)/, '⚠ Password must have at least 8 characters, 1 uppercase character, 1 number'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('newPassword'), null], '⚠ Password must match')
            .required('⚠ Confirm Password is required'),
    });

    const { register, errors, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    });

    return (
        <div className="container my-5" >
            <div className="change-password-container">
                <form className="change-password text-left" onSubmit={handleSubmit(onSubmit)}>
                    <h3>Change Password</h3>
                    <div className="" >
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="newPassword"
                                defaultValue={userReset.newPassword}
                                onChange={handleChange}
                                ref={register} />
                            <p className='err-message'>{errors.newPassword?.message}</p>
                            <div className="text-danger"></div>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                defaultValue={userReset.confirmPassword}
                                onChange={handleChange}
                                ref={register} />
                            <p className='err-message'>{errors.confirmPassword?.message}</p>
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
