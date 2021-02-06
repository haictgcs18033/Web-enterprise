import { Redirect, Route } from "react-router-dom"
import swal from "sweetalert";

export const AdminDashboard = props => {
    if (localStorage.getItem('USER_LOGIN')) {
        let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));
        if (userLogin.user.role === 'ADMIN') {
            let { path, Component } = props
            return <Route path={path} exact render={(propsRoute) => {
                return <Component {...propsRoute}></Component>
            }}></Route>

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

