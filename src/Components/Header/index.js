/** @format */
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import User from '../../assets/img/user-avt.png';
import Brand from '../../assets/img/logo.jpg';
import Navbar from '../../assets/img/navbarToggle.jpg';

import styles from './header.module.css';
import clsx from 'clsx';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  const ref = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowHeader(false);
    }
  };

  const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));

  const logout = () => {
    window.localStorage.clear();
  };

  const renderNavbar = (role) => {
    switch (role) {
      case 'STUDENT':
        return (
          <div>
            <div className={styles.nav}>
              <NavLink
                to='/student/home'
                exact
                className={styles.home}
                activeClassName={styles.active}>
                Home
              </NavLink>
              <div
                onClick={() => setShowHeader(!showHeader)}
                ref={ref}
                className={styles.user}>
                <p className={styles.username}>{userLogin.user.fullName}</p>
                <img className={styles.userAva} src={User} alt='avatar' />
                <div
                  className={clsx(styles.navMenu, showHeader && styles.show)}>
                  <div className={styles.navFullName}>
                    {userLogin.user.fullName}
                  </div>
                  <NavLink
                    className={styles.navMenuItem}
                    to='/student/upload-contribution'
                    activeClassName={styles.active}>
                    Upload Contribution
                  </NavLink>
                  <NavLink
                    className={styles.navMenuItem}
                    to='/student/changepassword'
                    activeClassName={styles.active}>
                    Change Password
                  </NavLink>
                  <div className='dropdown-divider' />
                  <NavLink
                    className={styles.navMenuItem}
                    activeClassName={styles.active}
                    to='/'
                    exact
                    onClick={() => {
                      logout();
                    }}>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      case 'MARKETING_CORDINATOR':
        return (
          <div>
            <div className={styles.nav}>
              <NavLink
                to='/coordinator/home'
                exact
                className={styles.home}
                activeClassName={styles.active}>
                Home
              </NavLink>
              <div
                onClick={() => setShowHeader(!showHeader)}
                ref={ref}
                className={styles.user}>
                <p className={styles.username}>{userLogin.user.fullName}</p>
                <img className={styles.userAva} src={User} alt='avatar' />
                <div
                  className={clsx(styles.navMenu, showHeader && styles.show)}>
                  <div className={styles.navFullName}>
                    {userLogin.user.fullName}
                  </div>
                  <NavLink
                    className={styles.navMenuItem}
                    to='/coordinator/changepassword'
                    activeClassName={styles.active}>
                    Change Password
                  </NavLink>
                  <div className='dropdown-divider' />
                  <NavLink
                    className={styles.navMenuItem}
                    activeClassName={styles.active}
                    to='/'
                    exact
                    onClick={() => {
                      logout();
                    }}>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      case 'MARKETING_MANAGER':
        return (
          <div>
            <div className={styles.nav}>
              <NavLink
                to='/manager/home'
                exact
                className={styles.home}
                activeClassName={styles.active}>
                Home
              </NavLink>
              <div
                onClick={() => setShowHeader(!showHeader)}
                ref={ref}
                className={styles.user}>
                <p className={styles.username}>{userLogin.user.fullName}</p>
                <img className={styles.userAva} src={User} alt='avatar' />
                <div
                  className={clsx(styles.navMenu, showHeader && styles.show)}>
                  <div className={styles.navFullName}>
                    {userLogin.user.fullName}
                  </div>
                  <NavLink
                    className={styles.navMenuItem}
                    to='/manager/changepassword'
                    activeClassName={styles.active}>
                    Change Password
                  </NavLink>
                  <div className='dropdown-divider' />
                  <NavLink
                    className={styles.navMenuItem}
                    activeClassName={styles.active}
                    to='/'
                    exact
                    onClick={() => {
                      logout();
                    }}>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return 'Invalid';
    }
  };

  return (
    <div className={styles.container}>
      <Link to='/'>
        <img className={styles.brand} src={Brand} alt='Greenplus' />
      </Link>
      {localStorage.getItem('USER_LOGIN') ? (
        renderNavbar(userLogin.user.role)
      ) : (
        <div>
          <div className={styles.desktopNav}>
            <NavLink
              to='/'
              exact
              className={styles.home}
              activeClassName={styles.active}>
              Home
            </NavLink>
            <NavLink
              to='/login'
              className={styles.signin}
              activeClassName={styles.active}>
              Sign in
            </NavLink>
          </div>
          <div ref={ref} className={styles.mobileNav}>
            <img
              onClick={() => setShowHeader(!showHeader)}
              src={Navbar}
              alt='Navbar'
            />
            <div className={clsx(styles.navMenu, showHeader && styles.show)}>
              <NavLink
                to='/'
                exact
                className={styles.navMenuItem}
                activeClassName={styles.active}>
                Home
              </NavLink>
              <NavLink
                to='/login'
                className={styles.navMenuItem}
                activeClassName={styles.active}>
                Sign in
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
