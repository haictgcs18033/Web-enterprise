/** @format */

import React, { useCallback, useEffect, useState } from 'react';

import classes from './ManagerLanding.module.scss';
// import ArrowRight from '../../assets/img/caret-right.png';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../redux/action/ActionForRedux';
import { NavLink } from 'react-router-dom';
export default function ManagerLanding() {
    const faculties = useSelector(
        (state) => state.webEnterpriseReducer.faculties
    );
    const dispatch = useDispatch();
    const [curPage] = useState(1);
    let limit = 99;
    let getFacultyList = useCallback(() => {
        dispatch(action.fetchFaculty(limit, curPage));
    }, [dispatch, limit, curPage]);

    useEffect(() => {
        dispatch({
            type: 'RESET_PUBLISH_STATE',
        });
    }, [dispatch]);
    useEffect(() => {
        getFacultyList();
    }, [getFacultyList]);

    return (
        <div className='container'>
            <h2 className={classes.facultyListTitle}>Site statistics</h2>
            <div className={classes.gridStatisticsContainer}>
                <div className={classes.gridStatistics}>
                    <div className={`${classes.box} ${classes.blueBox}`}>
                        5000 Sessions
                </div>
                    <div className={`${classes.box} ${classes.purpleBox}`}>
                        5000 Sessions
                </div>
                    <div className={`${classes.box} ${classes.greenBox}`}>
                        5000 Sessions
                </div>
                    <div className={`${classes.box} ${classes.yellowBox}`}>
                        5000 Sessions
                </div>
                </div>
            </div>

            <h2 className={classes.facultyListTitle}>Faculty list</h2>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    {faculties.map((faculty, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={`/manager/faculty/contribution/${faculty.id}`}
                                className={classes.facultyBtn}>
                                {faculty.name} ({faculty.contributionCount})
                                {/* <img src={ArrowRight} alt='123' /> */}
                                <i className="fa fa-angle-right"></i>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
