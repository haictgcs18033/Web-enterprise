import { Route } from "react-router-dom"


export const StudentDashboard=(props)=>{
    if(localStorage.getItem('USER_LOGIN')){
        let userLogin=JSON.parse(localStorage.getItem('USER_LOGIN'))
        if(userLogin.user.role==='STUDENT'){
           let {path,Component}=props
           return <Route path={path} exact render={}></Route>
        }
    }
}