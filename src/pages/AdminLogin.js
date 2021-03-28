/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { handleInput, loginAction } from '../redux/action/ActionForRedux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function AdminLogin(props) {
    const user = useSelector((state) => state.webEnterpriseReducer.user);
    const dispatch = useDispatch();
    let { email, password } = user.values;
    let handleChangeInput = (e) => {
        let { value, name } = e.target;
        let newValues = { ...user.values };
        newValues[name] = value;
        dispatch(handleInput(newValues));
    };

    let schema = yup.object().shape({
        email: yup.string()
            .required('⚠ Email is required')
            .email('⚠ Enter a valid email'),
        password: yup.string()
            .max(8, '⚠ Password must not be longer than 8 characters')
            .required('⚠ Password is required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,}$)/, '⚠ Password must have at least 8 characters, 1 uppercase character, 1 number'),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        data = { ...user.values };
        dispatch(loginAction(data, props));
    };

    return (
        <div className='container-fluid  admin-container'>
            <form className='admin-form p-4' onSubmit={handleSubmit(onSubmit)}>
                <img className='d-block mx-auto' src={logo} alt='123' />
                <h3 className='text-center'>FOR ADMIN</h3>
                <h3 className='text-center'>
                    <span className='mr-2'>WELCOME</span>TO SIGN IN
                </h3>
                <label htmlFor='email' className='mb-2'>
                    Email
                </label>
                <input
                    className='form-control'
                    id='email'
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChangeInput}
                    ref={register}
                />
                <p className='err-message'>{errors.email?.message}</p>
                <div className='mt-5'>
                    <label htmlFor='password' className='mb-2'>
                        Password
                    </label>
                    <input
                        className='form-control'
                        name='password'
                        id='password'
                        type='password'
                        value={password}
                        onChange={handleChangeInput}
                        ref={register}
                    />
                    <p className='err-message'>{errors.password?.message}</p>
                </div>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <button type='submit'>SIGN IN</button>
                    </div>
                    <div className='col-6 text-center permission-container '>
                        <NavLink to='/' className='permission'>
                            {' '}
                            Does not have permission ?
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}
