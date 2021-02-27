/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';


export default function LoginPage() {
    const emailTest = [
        'test1@gmail.com',
        'test2@gmail.com',
        'test3@gmail.com',
    ]

    // const lowerCaseRegex = /(?=.*[a-z])/;
    const upperCaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;

    let schema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .email('Enter a valid email')
            .notOneOf(emailTest, 'Email already existed!'),
        password: yup.string()
            .required('Password is required')
            // .matches(lowerCaseRegex, 'Password must have at least 1 lowercase character')
            .matches(upperCaseRegex, 'Password must have at least 1 uppercase character')
            .matches(numericRegex, 'Password must have at least 1 number')
            .min(8, 'Password must have at least 8 characters'),
    })

    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
    });

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
                            <label>Email</label>
                            <input
                                type='text'
                                name='email'
                                className='form-control'
                                ref={register}
                            />
                            <p className='err-message'>{errors.email?.message}</p>
                        </div>
                        <div className='password'>
                            <label>Password</label>
                            <input
                                type='password'
                                name='password'
                                className='form-control'
                                ref={register}
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
