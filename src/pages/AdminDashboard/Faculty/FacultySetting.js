import clsx from 'clsx';
// import axios from 'axios'
import React, { useEffect } from 'react'
import * as action from '../../../redux/action/ActionForRedux'
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Delete } from '../../../assets/icons'
import styles from '../Users/user.module.css'
import moment from 'moment';
export default function FacultySetting(props) {
    const load = useSelector(state => state.webEnterpriseReducer.load)
    const facultySetting = useSelector(state => state.webEnterpriseReducer.facultySetting)
    const closureDateAdmin = useSelector(state => state.webEnterpriseReducer.closureDateAdmin)
    let dispatch = useDispatch()
    const id = props.match.params.id
    useEffect(() => {
        dispatch(action.fetchFacultyById(id))
    }, [dispatch, id])
    console.log(facultySetting);
    let deleteFaculty = (id) => {
        dispatch(action.handleDeleteFaculty(id, props))
    }
    useEffect(()=>{
        dispatch(action.fetchClosureDate())
    },[dispatch,])
    console.log(closureDateAdmin);
    return (
        <div className={clsx(styles.tableWrap, load && styles.load)}>
            <div className="d-flex justify-content-between">
                <h3 className={styles.userTitle}>Settings</h3>
                <NavLink to="/admin/dashboard/faculty" className={` ${styles.goBack}`}>
                    <span><i className="fa fa-angle-left mr-3"></i></span>
                    <span>Go back</span>
                </NavLink>
            </div>


            <div className={styles.settingContainer}>
                <div className={styles.settingUpdate}>
                    <h3>Faculty</h3>
                    <div className="mt-4">
                        <p>Faculty name</p>
                        <p>{facultySetting.name}</p>
                        <p>Created date</p>
                        <p>{facultySetting.createAt}</p>
                    </div>
                    <div className={`${styles.updateButton} text-right`}>
                        <button className="btn">Update</button>
                    </div>
                </div>
                <div className={styles.settingDelete}>
                    <h3>Closure date</h3>
                    <div className={`d-flex`}>
                        <div className={styles.warning}>
                            <div className="qwe">
                                <h4>Closure Date</h4>
                                <p>
                                    {moment(closureDateAdmin.firstClosureDate).format('L')}-{moment(closureDateAdmin.firstClosureDate).format('LT')}
                                </p>
                                <h4>Final Closure Date</h4>
                                <p>
                                    {moment(closureDateAdmin.secondClosureDate).format('L')}-{moment(closureDateAdmin.secondClosureDate).format('LT')}
                                </p>
                                <h4>Delete this faculty</h4>
                                <p>Once you delete the faculty, there is no going back.</p>
                            </div>
                            <div className={styles.deleteButton}>
                                <button className="btn" onClick={() => {
                                    deleteFaculty(id)
                                }}><Delete /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
