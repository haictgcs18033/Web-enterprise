import { Redirect, Route } from "react-router-dom"
import swal from "sweetalert";
import Sidebar from "../Components/Sidebar";
import UserAvt from '../assets/img/user-avt.png'

export const AdminDashboard = props => {
    if (localStorage.getItem('USER_LOGIN')) {
        let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));
        if (userLogin.user.role === 'ADMIN') {
            let { path, Component } = props
            return (
                <div className="container-fluid admin-dashboard">
                    <Sidebar></Sidebar>
                    <div className="user-info">
                        <p className="user-name" >Hello {userLogin.user.fullName}</p>
                        <img className="user-avt" src={UserAvt} alt="123"></img>
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

