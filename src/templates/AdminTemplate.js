/** @format */

import { Route } from 'react-router-dom';

export const AdminTemplate = ({ Component, component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return <Component {...propsRoute}></Component>;
      }}></Route>
  );
};
