import { Redirect, Route } from "react-router-dom"
import swal from "sweetalert"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"


export const StudentDashboard = (props) => {
    if (localStorage.getItem('USER_LOGIN')) {
        let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
        if (userLogin.user.role === 'STUDENT') {
            let { path, Component } = props
            return <Route path={path} exact render={propsRoute => {
                return <>
                    <Navbar></Navbar>
                    <Component></Component>
                    <Footer></Footer>
                </>
            }}></Route>
        }
    }
    swal({
        title: "You are not login!",
        icon: "warning",
    });
    return <Redirect to='/login'></Redirect>
}