/** @format */

import './App.css';
import { Router, Switch } from 'react-router-dom';
import './sass/webEnterprise.scss';
import { PrimaryTemplate } from './templates/PrimaryTemplate';
import { admin, client ,adminDashboardRoute} from './Route';
import { AdminTemplate } from './templates/AdminTemplate';
import { AdminDashboard } from './templates/AdminDashboard';
import { createBrowserHistory } from 'history';


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
  const adminDashboard=routes=>{
    return routes.map((route,index)=>{
      return (
        <AdminDashboard key={index} 
        path={route.path}
         Component={route.component}></AdminDashboard>
      )
    })
  }
  return (
    <Router history={history}>
      <Switch>{clientRoute(client)}</Switch>
      <Switch>{adminRoute(admin)}</Switch>
      <Switch>{adminDashboard(adminDashboardRoute)}</Switch>
    </Router>
  );
}

export default App;
