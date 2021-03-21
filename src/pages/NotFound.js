/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound({ history }) {
  return (
    <div className='container container-content'>
      <div className='text-center'>
        <span className='title-span'>404</span>
        <h2 className='notfound-title'>Page not found</h2>
      </div>
      <h2 className='text-center notfound-content'>
        Sorry! We cannot find this content
      </h2>
      <div className='btn-reverse text-center'>
        <button
          onClick={() => history.goBack()}
          type='button'
          className='go-back-btn'>
          Go back
        </button>
        <button type='button' className='back-home-btn'>
          <NavLink to='/'>Back to home</NavLink>
        </button>
      </div>
    </div>
  );
}
