/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='container-login'>
      <div className='row my-4'>
        <div>
          <div className='w-100'>
            <img className='login-img' src='/img/cover-1.jpg' alt='123' />
          </div>
        </div>
        <div className='login-wrapform'>
          <form className='login-form'>
            <h3 className='text-center mb-4'>
              {' '}
              <span>WELCOME</span> TO SIGN IN
            </h3>
            <div className='email'>
              <label>Email</label>
              <input className='form-control' />
            </div>
            <div className='password'>
              <label>Password</label>
              <input className='form-control' />
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
