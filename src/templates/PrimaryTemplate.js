import { Route } from "react-router-dom";
import Background from "../Components/Background";
import Contribution from "../Components/Contribution";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const PrimaryTemplate=(props)=>{
    let {path,Component}=props;
    return <Route path={path} exact render={((propsRoute)=>{
        return <div>
            <Navbar></Navbar>
            <Component {...propsRoute}></Component>
            <Footer></Footer>
        </div>
    })}></Route>
}