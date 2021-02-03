import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom'
import './sass/webEnterprise.scss'
import { PrimaryTemplate } from './templates/PrimaryTemplate';
import { admin, client } from './Route'
import NotFound from './pages/NotFound';
import { AdminTemplate } from './templates/AdminTemplate';


function App() {
    const clientRoute = (routes) => {
        if (routes.length > 0) {
            return routes.map((route, index) => {
                return <PrimaryTemplate key={index} path={route.path} Component={route.component}></PrimaryTemplate>
            })
        }
    }
    const adminRoute = (routes) => {
        return routes.map((route, index) => {
            return <AdminTemplate key={index} path={route.path} Component={route.component}></AdminTemplate>
        })
    }
    return (
        <BrowserRouter>
            <Switch>
                {clientRoute(client)}
                <PrimaryTemplate path="*" Component={NotFound}></PrimaryTemplate>
            </Switch>
            <Switch>
                {adminRoute(admin)}
            </Switch>
           
        </BrowserRouter>
    );
}

export default App;
