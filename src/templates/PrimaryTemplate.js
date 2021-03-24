/** @format */

import { Redirect, Route } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export const PrimaryTemplate = ({ Component, component, ...props }) => {
  if(localStorage.getItem('USER_LOGIN')){
    let userLogin=JSON.parse(localStorage.getItem('USER_LOGIN'));
    if(userLogin.user.role==='STUDENT'){
     return <Redirect to="/student/home"/> 
    }
    else if(userLogin.user.role==='MARKETING_MANAGER'){
      return <Redirect to="/manager/home"/>
    }
    else if(userLogin.user.role==='MARKETING_CORDINATOR'){
      return <Redirect to="/coordinator/home"/>
    }
  }
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <div>
            <Navbar></Navbar>
            <Component {...propsRoute}></Component>
            <Footer></Footer>
          </div>
        );
      }}></Route>
  );
};
