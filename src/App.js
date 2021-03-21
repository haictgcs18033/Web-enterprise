/** @format */

import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import './sass/webEnterprise.scss';
import { PrimaryTemplate } from './templates/PrimaryTemplate';
import { admin, client, adminDashboardRoute, studentDashboardRoute } from './Route';
import { AdminTemplate } from './templates/AdminTemplate';
import { AdminDashboard } from './templates/AdminDashboard';
import { createBrowserHistory } from 'history';

import { StudentDashboard } from './templates/StudentDashBoard/StudentDashboard';
import NotFound from './pages/NotFound';



export const history = createBrowserHistory();
function App() {
  const clientRoute = (routes) => {
    if (routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <PrimaryTemplate
            key={index}
            path={route.path}
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
          path={route.path}
          Component={route.component}></AdminTemplate>
      );
    });
  };
  const adminDashboard = routes => {
    return routes.map((route, index) => {
      return (
        <AdminDashboard key={index}
          path={route.path}
          Component={route.component}></AdminDashboard>
      )
    })
  }
  const studentDashboard = routes => {
    return routes.map((route, index) => {
      return (
        <StudentDashboard key={index} path={route.path}
          Component={route.component}></StudentDashboard>
      )
    })
  }
  return (
    <>
      <Router history={history}> 
          <Switch>
            {clientRoute(client)}
            <Route component={NotFound}></Route>
          </Switch>
          <Switch>{adminRoute(admin)}</Switch>
          <Switch>{adminDashboard(adminDashboardRoute)}</Switch>
          <Switch>{studentDashboard(studentDashboardRoute)}</Switch>
      </Router>


    </>
  );
}

export default App;
