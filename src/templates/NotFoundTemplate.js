import { Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const NotFoundTemplate = (props) => {
    let { path, Component } = props;
    return <Route path={path} exact render={((propsRoute) => {
        return <div>
            <Navbar></Navbar>
            <Component {...propsRoute}></Component>
            <Footer></Footer>
        </div>
    })}></Route>
}