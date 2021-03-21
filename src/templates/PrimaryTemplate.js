/** @format */

import { Route } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export const PrimaryTemplate = ({ Component, component, ...props }) => {
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
