/** @format */

import { Redirect, Route } from 'react-router-dom';
import swal from 'sweetalert';
import Background from '../../Components/Background';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

export const StudentDashboard = ({ Component, component, ...props }) => {
  if (localStorage.getItem('USER_LOGIN')) {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));
    if (userLogin.user.role === 'STUDENT') {
      return (
        <Route
          {...props}
          render={(propsRoute) => {
            return (
              <>
                <Header />
                <Background></Background>
                <Component></Component>
                <Footer></Footer>
              </>
            );
          }}></Route>
      );
    }
    swal({
      title: 'You are not student!',
      icon: 'warning',
    });
    return <Redirect to='/' />;
  }
  swal({
    title: 'You are not login!',
    icon: 'warning',
  });
  return <Redirect to='/login'></Redirect>;
};
