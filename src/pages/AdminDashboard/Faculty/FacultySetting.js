import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import * as action from '../../../redux/action/ActionForRedux'
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
    let [facultyUpdate, setFacultyUpdate] = useState({
        name: '',
        firstClosureDate: '',
        secondClosureDate: ''
    })
    const id = props.match.params.id
    useEffect(() => {
        dispatch(action.fetchFacultyById(id))
    }, [dispatch, id])
    console.log(facultySetting);
    let deleteFaculty = (id) => {
        dispatch(action.handleDeleteFaculty(id, props))
    }
    useEffect(() => {
        dispatch(action.fetchClosureDate())
    }, [dispatch,])
    console.log(closureDateAdmin);
    let handleChangeName = (e) => {
        setFacultyUpdate({
            name: e.target.value,
            firstClosureDate: closureDateAdmin.firstClosureDate,
            secondClosureDate: closureDateAdmin.secondClosureDate
        })
    }
    let handleUpdateFaculty = (e) => {
        e.preventDefault()
        dispatch(action.updateFaculty(id, facultyUpdate))
    }
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
                        <button className="btn" data-toggle='modal'
                            data-target='#exampleModal'
                            onClick={() => {
                                setFacultyUpdate({
                                    name: facultySetting.name,
                                })
                            }}>Update</button>
                    </div>
                    <form
                        className='modal fade'
                        id='exampleModal'
                        tabIndex='-1'
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'
                        onSubmit={handleUpdateFaculty}>
                        <div className='modal-dialog' role='document'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>
                                        Update Faculty
                                       </h5>
                                </div>
                                <div className='modal-body'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <label className="text-left">Faculty name</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    value={facultyUpdate.name}
                                                    onChange={handleChangeName}
                                                />
                                                <p className='err-message'>
                                                    {/* {errors.fullName?.message} */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        type='button'
                                        className='btn btn__cancel'
                                        data-dismiss='modal'>
                                        Cancel
                                        </button>
                                    <button

                                        type='submit'
                                        className='btn btn__create'>
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
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
                                <button className="btn" 
                                data-toggle='modal'
                                data-target='#exampleModalDelete' >
                                    <Delete />
                                    </button>
                            </div>
                            <div
                                className='modal fade'
                                id='exampleModalDelete'
                                tabIndex={-1}
                                role='dialog'
                                aria-labelledby='exampleModalLabel'
                                aria-hidden='true'>
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            <h5 className='modal-title' id='exampleModalLabel'>
                                                Delete Faculty
                                                </h5>
                                        </div>
                                        <div className='modal-body'>
                                            <p>
                                                <span>
                                                    Do you want to delete{' '}
                                                </span>
                                                <span className='font-weight-bold'>
                                                      Faculty Name   
                                                </span>
                                            </p>
                                        </div>
                                        <div className='modal-footer'>
                                            <button
                                                type='button'
                                                className={`btn ${styles.modalDeleteClose}`}
                                                data-dismiss='modal'>
                                                Close
                                                </button>
                                            <button
                                                type='button'
                                                className={`btn ${styles.modalDelete}`}
                                                data-dismiss='modal'
                                                onClick={() => {
                                                    deleteFaculty(id)
                                                }}>
                                                Confirm
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
