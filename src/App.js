import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './sass/webEnterprise.scss'
import { PrimaryTemplate } from './templates/PrimaryTemplate';

import LoginPage from './pages/LoginPage';
import {client} from './Route'

function App() {
    const clientRoute= (routes)=>{
        if(routes.length>0){
            return routes.map((route,index)=>{
                return  <PrimaryTemplate key={index} {...route} Component={route.component}></PrimaryTemplate>
            })
        }
    }
    return (
       <BrowserRouter>
      <Switch>
          {clientRoute(client)}
      </Switch>
        
       </BrowserRouter>
    );
}

export default App;
