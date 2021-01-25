import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Login() {
    const hoTen = useSelector(state => state.webEnterpriseReducer.hoTen)
    const dispatch = useDispatch()
    return (
        <div>
            {hoTen}
          
        </div>
    )
}
