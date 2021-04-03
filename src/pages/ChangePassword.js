/** @format */

import React, { useState } from 'react';
import changepasswordImg from '../assets/img/change-password-img.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { handleChangePassword } from '../redux/action/ActionForRedux';
export default function ChangePassword(props) {
    let [changePassword, setChangePassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    let dispatch = useDispatch();
    let validationSchema = yup.object().shape({
        currentPassword: yup
            .string()
            .required('⚠ Current password is required'),
        newPassword: yup
            .string()
            .required('⚠ New password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,}$)/,
                '⚠ Password must have at least 8 characters, 1 uppercase character, 1 number'
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('newPassword'), null], '⚠ Password must match')
            .required('⚠ Confirm Password is required'),

    });

    const { register, errors, handleSubmit, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });
    let handleChange = (e) => {
        let { value, name } = e.target;
        setChangePassword({ ...changePassword, [name]: value });
    };
    let onSubmit = (data, e) => {
        dispatch(handleChangePassword(changePassword, props));
        e.target.reset();
    };
    return (
        <div className='changepassword-container'>
            <div className='row my-4'>
                <div>
                    <div className='w-100'>
                        <img
                            className='changepassword-img'
                            src={changepasswordImg}
                            alt='123'
                        />
                    </div>
                </div>
                <div className='changepassword-wrapform'>
                    <form
                        className='changepassword-form'
                        onSubmit={handleSubmit(onSubmit)}
                        onReset={reset}
                    >
                        <h3 className='text-center changepassword-title'>
                            Change password
                        </h3>
                        <label className='changepassword-label'>Current Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='currentPassword'
                            defaultValue={changePassword.currentPassword}
                            onChange={handleChange}
                            ref={register}
                        />
                        <p className='err-message'>{errors.currentPassword?.message}</p>
                        <label className='changepassword-label'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='newPassword'
                            defaultValue={changePassword.newPassword}
                            onChange={handleChange}
                            ref={register}
                        />
                        <p className='err-message'>{errors.newPassword?.message}</p>
                        <label className='changepassword-label'>Confirm Password</label>
                        <input
                            type='password'
                            className='form-control'
                            ref={register}
                            name='confirmPassword'
                            defaultValue={changePassword.confirmPassword}
                            onChange={handleChange}
                        />
                        <p className='err-message'>{errors.confirmPassword?.message}</p>
                        <button className='confirm-btn'>Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
