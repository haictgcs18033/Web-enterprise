/** @format */

import { NavLink, Redirect, Route } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from '../Components/Sidebar';
import UserAvt from '../assets/img/user-avt.png';
import { useState } from 'react';

export const AdminDashboard = ({ Component, component, ...props }) => {
  let [dropdown, setDropdown] = useState(false);
  let handleDropdown = () => {
    setDropdown(!dropdown);
  };
  let logout = () => {
    window.localStorage.clear();
  };
  if (localStorage.getItem('USER_LOGIN')) {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));
    if (userLogin.user.role === 'ADMIN') {
      return (
        <div className='container-fluid admin-dashboard'>
          <Sidebar></Sidebar>
          <div className='container-fluid user-info-wrap'>
            <div className='user-info-tableWrap'>
              <div
                className='user-info'
                onClick={() => {
                  handleDropdown();
                }}>
                <p className='user-name'>Hello {userLogin.user.fullName}</p>
                <img className='user-avt' src={UserAvt} alt='123'></img>
                <div className={dropdown ? 'admin-function' : 'admin-hidden'}>
                  <ul>
                    <li>
                      <NavLink
                        to='/admin/changepassword'
                        className='link-navigate'>
                        Change password
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/'
                        className='link-navigate'
                        onClick={() => {
                          logout();
                        }}>
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Route
            {...props}
            render={(propsRoute) => {
              return <Component {...propsRoute}></Component>;
            }}></Route>
        </div>
      );
    }
    swal({
      title: 'You are not admin!',
      icon: 'warning',
    });
    return <Redirect to='/admin'></Redirect>;
  }
  swal({
    title: 'You are not admin!',
    icon: 'warning',
  });
  return <Redirect to='/admin'></Redirect>;
};
