/** @format */

import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import './sass/webEnterprise.scss';
import { PrimaryTemplate } from './templates/PrimaryTemplate';
import {
  admin,
  client,
  adminDashboardRoute,
  studentDashboardRoute,
} from './Routes';
import { AdminTemplate } from './templates/AdminTemplate';
import { AdminDashboard } from './templates/AdminDashboard';
import { createBrowserHistory } from 'history';

import { StudentDashboard } from './templates/StudentDashBoard/StudentDashboard';

export const history = createBrowserHistory();
function App() {
  const clientRoute = (routes) => {
    if (routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <PrimaryTemplate
            key={index}
            {...route}
            Component={route.component}></PrimaryTemplate>
        );
      });
    }
  };
  const adminRoute = (routes) => {
    return routes.map((route, index) => {
      return (
        <AdminTemplate
          key={index}
          {...route}
          Component={route.component}></AdminTemplate>
      );
    });
  };
  const adminDashboard = (routes) => {
    return routes.map((route, index) => {
      return (
        <AdminDashboard
          key={index}
          {...route}
          Component={route.component}></AdminDashboard>
      );
    });
  };
  const studentDashboard = (routes) => {
    return routes.map((route, index) => {
      return (
        <StudentDashboard
          key={index}
          {...route}
          Component={route.component}></StudentDashboard>
      );
    });
  };
  return (
    <>
      <BrowserRouter history={history}>
        <Switch>
          {adminRoute(admin)}
          {adminDashboard(adminDashboardRoute)}
          {studentDashboard(studentDashboardRoute)}
          {clientRoute(client)}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
