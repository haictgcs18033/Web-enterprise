/** @format */

import './App.css';
import { Router, Switch } from 'react-router-dom';
import './sass/webEnterprise.scss';
import { PrimaryTemplate } from './templates/PrimaryTemplate';
import { admin, client } from './Route';
import { AdminTemplate } from './templates/AdminTemplate';
import { AdminDashboard } from './templates/AdminDashboard';
import { createBrowserHistory } from 'history';
import UserDashboard from './pages/AdminDashboard/Users';

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
  return (
    <Router history={history}>
      <Switch>{clientRoute(client)}</Switch>
      <Switch>{adminRoute(admin)}</Switch>
      <Switch>
        <AdminDashboard
          path='/admin/dashboard'
          Component={UserDashboard}></AdminDashboard>
      </Switch>
    </Router>
  );
}

export default App;
