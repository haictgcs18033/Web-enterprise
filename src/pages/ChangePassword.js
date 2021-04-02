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
    newPassword: yup
      .string()
      // .max(8, '⚠ Password must not be longer than 8 characters')
      .required('⚠ Password is required')
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
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  let handleChange = (e) => {
    let { value, name } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };
  console.log(changePassword);
  let onSubmit = (data) => {
    dispatch(handleChangePassword(changePassword, props));
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
            onReset={reset}>
            <h3 className='text-center changepassword-title'>
              Change password
            </h3>
            <label className='changepassword-label'>Current Password</label>
            <input
              type='password'
              className='form-control'
              name='currentPassword'
              value={changePassword.currentPassword}
              onChange={handleChange}
              ref={register}
            />
            <label className='changepassword-label'>Password</label>
            <input
              type='password'
              className='form-control'
              name='newPassword'
              value={changePassword.newPassword}
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
              value={changePassword.confirmPassword}
              onChange={handleChange}
            />
            <p className='err-message'>{errors.newPassword?.message}</p>
            <button className='confirm-btn'>Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}
