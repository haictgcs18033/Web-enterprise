import { Redirect, Route } from "react-router-dom"
import swal from "sweetalert";
import Sidebar from "../Components/Sidebar";

export const AdminDashboard = props => {
    if (localStorage.getItem('USER_LOGIN')) {
        let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));
        if (userLogin.user.role === 'ADMIN') {
            let { path, Component } = props
            return (
                <div className="container-fluid admin-dashboard">
                <Sidebar></Sidebar>
                <div style={{paddingTop:'19px'}}>
                <p className="text-right" style={{marginRight:'54px'}}>
                    <span>Hello {userLogin.user.fullName}</span>
                </p>
                </div>
               
                <Route path={path} exact render={(propsRoute) => {
                    return <Component {...propsRoute}></Component>
                }}></Route>
                </div>
            ) 
          

        }
        swal({
            title: "You are not admin!",
            icon: "warning",

        });
        return <Redirect to='/admin'></Redirect>
    }
    swal({
        title: "You are not admin!",
        icon: "warning",
    });
    return <Redirect to='/admin'></Redirect>
}

