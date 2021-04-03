import React, { useCallback, useEffect, useState } from 'react'

import classes from './ManagerLanding.module.scss'
import ArrowRight from '../../assets/img/caret-right.png'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/action/ActionForRedux'
import { NavLink } from 'react-router-dom'
export default function ManagerLanding() {
    const faculties = useSelector(state => state.webEnterpriseReducer.faculties)
    const dispatch = useDispatch()
    const [curPage] = useState(1)
    let limit = 10
    let getFacultyList = useCallback(() => {
        dispatch(action.fetchFaculty(limit, curPage))
    },
        [dispatch, limit, curPage],
    )
    useEffect(() => {
        getFacultyList()
    }, [getFacultyList])
    return (
        <div className="container">
            <h2 className={classes.facultyListTitle}>
                Faculty list
            </h2>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    {
                        faculties.map((faculty,index) => {
                            return <NavLink key={index} to={`/manager/faculty/contribution/${faculty.id}`}className={classes.facultyBtn}>
                                 {faculty.name}
                                <img src={ArrowRight} alt="123" />
                            </NavLink>
                        })
                    }


                </div>
            </div>
        </div>
    )
}
