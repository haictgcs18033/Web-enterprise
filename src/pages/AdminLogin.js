import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { handleInput,loginAction } from '../redux/action/ActionForRedux'

export default function AdminLogin(props) {
    const user = useSelector(state => state.webEnterpriseReducer.user)
    const dispatch = useDispatch()
    let { email, password } = user.values
    let handleChangeInput=(e)=>{
        let {value,name} =e.target
        console.log(value,name);
       let newValues={...user.values}
       newValues[name]=value;
       dispatch(handleInput(newValues));
    }
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        let userData={...user.values}
        dispatch(loginAction(userData,props))
    }
 
    return (
        
        <div className="container-fluid  admin-container">
            
               
                    <form className="admin-form p-4" onSubmit={handleSubmit}>
                        <img className="d-block mx-auto" src={logo} alt="123" />
                        <h3 className="text-center">FOR ADMIN</h3>
                        <h3 className="text-center"><span className="mr-2">WELCOME</span>TO SIGN IN</h3>
                        <label className="mb-2">Email</label>
                        <input className="form-control" name="email" value={email} onChange={handleChangeInput} />
                        <div className="mt-5">
                            <label className="mb-2">Password</label>
                            <input className="form-control" name="password" value={password} onChange={handleChangeInput} />
                        </div>
                       
                        <div className="row mt-4">
                            <div className="col-6">
                                <button >SIGN IN</button>
                            </div>
                            <div className="col-6 text-right ">
                                <NavLink to="/" className="permission"> Does not have permission ?</NavLink>
                            </div>
                        </div>
                    </form>
                
            
        </div>

    )
}
