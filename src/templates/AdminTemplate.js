import { Route } from "react-router-dom"

export const AdminTemplate = props => {
    let { Component, path } = props
    return <Route path={path} exact render={(propsRoute) => {
        return <Component {...propsRoute}></Component>
    }}></Route>
   
}