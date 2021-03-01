/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { handleInput, loginAction } from '../redux/action/ActionForRedux'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';

export default function LoginPage(props) {
    const user = useSelector(state => state.webEnterpriseReducer.user)
    const dispatch = useDispatch()
    let { email, password } = user.values
    let handleChangeInput = (e) => {
        let { value, name } = e.target
        console.log(value, name);
        let newValues = { ...user.values }
        newValues[name] = value;
        dispatch(handleInput(newValues));
    }


    let schema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .email('Enter a valid email'),
        password: yup.string()
            .required('Password is required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Password must have at least 1 uppercase character and 1 number')
            .min(8, 'Password must have at least 8 characters'),
    })

    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        data = { ...user.values }
        dispatch(loginAction(data, props))
    };


    return (
        <div className='container-login'>
            <div className='row my-4'>
                <div>
                    <div className='w-100'>
                        <img className='login-img' src='/img/cover-1.jpg' alt='123' />
                    </div>
                </div>
                <div className='login-wrapform'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='login-form'
                    >
                        <h3 className='text-center mb-4'>
                            {' '}
                            <span>WELCOME</span> TO SIGN IN
                        </h3>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input
                                id='email'
                                type='text'
                                name='email'
                                value={email}
                                className='form-control'
                                ref={register}
                                onChange={handleChangeInput}
                            />
                            <p className='err-message'>{errors.email?.message}</p>
                        </div>
                        <div className='password'>
                            <label>Password</label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                value={password}
                                className='form-control'
                                ref={register}
                                onChange={handleChangeInput}
                            />
                            <p className='err-message'>{errors.password?.message}</p>
                        </div>
                        <div className='login-action'>
                            <div className='signin-btn'>
                                <button>SIGN IN</button>
                            </div>
                            <div className='forget-password'>
                                <NavLink to='/forget-password'> Forgot your password ?</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
