/** @format */

import { Redirect, Route } from 'react-router';
import swal from 'sweetalert';
import ChatIcon from '../Components/ChatIcon';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
export const CordinatorDashboard = ({ Component, component, ...props }) => {
  if (localStorage.getItem('USER_LOGIN')) {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));
    if (userLogin.user.role === 'MARKETING_CORDINATOR') {
      return (
        <Route
          {...props}
          render={(propsRoute) => {
            return (
              <>
                <Header />
                <Component></Component>
                <Footer></Footer>
                <ChatIcon />
              </>
            );
          }}></Route>
      );
    }
    swal({
      title: 'You are not coordinator',
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
