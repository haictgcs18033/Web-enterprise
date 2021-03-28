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
  managerDashboardRoute,
  coordinatorDashboardRoute,
} from './Routes';
import { AdminTemplate } from './templates/AdminTemplate';
import { AdminDashboard } from './templates/AdminDashboard';
import { createBrowserHistory } from 'history';
import { StudentDashboard } from './templates/StudentDashBoard/StudentDashboard';
import { ManagerDashboard } from './templates/ManagerDashboard';
import { CordinatorDashboard } from './templates/CoordinatorDashboard';

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
  const managerDashboard=routes=>{
    return routes.map((route,index)=>{
      return( 
        <ManagerDashboard key={index} {...route} Component={route.component}></ManagerDashboard>
      )
    })
  }
  const coordinatorDashboard=routes=>{
    return routes.map((route,index)=>{
      return( 
        <CordinatorDashboard key={index} {...route} Component={route.component}></CordinatorDashboard>
      )
    })
  }
  return (
    <>
      <BrowserRouter history={history}>
        <Switch>
          {adminRoute(admin)}
          {adminDashboard(adminDashboardRoute)}
          {coordinatorDashboard(coordinatorDashboardRoute)}
          {studentDashboard(studentDashboardRoute)}
          {managerDashboard(managerDashboardRoute)}
          {clientRoute(client)}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
