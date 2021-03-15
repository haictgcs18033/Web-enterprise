import clsx from 'clsx';
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../../redux/action/ActionForRedux'
import SearchIcon from '../../../assets/img/search-icon.png';
import SettingIcon from '../../../assets/img/Vector.png'
import moment from 'moment'
import styles from '../Users/user.module.css'
export default function Faculty() {
    const faculties = useSelector(state => state.webEnterpriseReducer.faculties)
    const load = useSelector((state) => state.webEnterpriseReducer.load);
    const totalItems = useSelector(
        (state) => state.webEnterpriseReducer.totalItems
    );
    const [curPage, setCurPage] = useState(1);
    const limit = 6;
    let dispatch = useDispatch()
    const getFacultyList = useCallback(() => dispatch(action.fetchFaculty(limit, curPage)),
        [dispatch, curPage])
    useEffect(() => {
        getFacultyList()
    }, [getFacultyList])
    const pageNumber = [];
    if (faculties) {
        for (let i = 1; i <= Math.ceil(totalItems / limit); i++) {
            pageNumber.push(i);
        }
    }
    console.log(faculties);
    let renderFaculties = () => {
        if (faculties.length > 0) {
            return faculties.map((faculty) => {
                return (
                    <tr key={faculty.id} className={styles.listItem}>
                        <td className={styles.listColumn}>
                            <p className={styles.username}>{faculty.name}</p>
                        </td>
                        <td className={styles.listColumn}>
                            <p className={styles.email}>Create at {moment(faculty.createAt).format('LT')}-{moment(faculty.createAt).format('L')}</p>
                        </td>
                        <td>
                            <img className="setting-icon" src={SettingIcon} alt="setting"/>
                        </td>
                    </tr>
                )
            })
        }
    }
    let renderPages = () => {
        return pageNumber.map((pageNumber, index) => {
            return (
                <p
                    key={index}
                    onClick={() => setCurPage(pageNumber)}
                    className={clsx(
                        styles.page,
                        curPage === pageNumber && styles.current
                    )}>
                    {pageNumber}
                </p>
            );
        });
    }
    return (
        <div className={`container-fluid ${styles.wrapper}`}>
            <div className={clsx(styles.tableWrap, load && styles.load)}>
                <div className='d-flex justify-content-between'>
                    <h3 className={styles.userTitle}>Faculties</h3>
                    <div className="d-flex">
                    <button
                        type='button'
                        className={styles.setClosureBtn}
                        data-toggle='modal'
                        data-target='#exampleModal'>
                       Set closure date
                    </button>
                    <button
                        type='button'
                        className={styles.createBtn}
                        data-toggle='modal'
                        data-target='#exampleModal'>
                        Create
                    </button>
                    </div>
                    <form
                        className='modal fade'
                        id='exampleModal'
                        tabIndex='-1'
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'
                    >
                        <div className='modal-dialog' role='document'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>
                                        Create Faculty
                                    </h5>
                                </div>
                                <div className='modal-body'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <label>Faculty name</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    name='fullName'
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
                                        data-dismiss='modal'
                                        type='submit'
                                        className='btn btn__create'>
                                        Create
                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={'user-form'}>
                    <div className='search-role'>
                        <div className='row'>
                            <div className='col-9'>
                                <input
                                    type='text'
                                    // onChange={(e) => {
                                    //     setKeyword(e.target.value);
                                    //     setCurPage(1);
                                    // }}
                                    placeholder='Search'
                                />
                                <img className='search-icon' src={SearchIcon} alt='search' />
                            </div>
                            <div className='col-3'>
                                <select
                                    className='role-select'
                                    name='id'
                                    onChange={(e) => {
                                        // setFaculty(e.target.value);
                                        setCurPage(1);
                                    }}>
                                    <option value=''>All faculties</option>
                                    {faculties.map((faculty, index) => {
                                        return (
                                            <option key={index} value={faculty.id}>
                                                {faculty.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.head}>
                                    <p>Name</p>
                                </th>
                                <th className={styles.head}>
                                    <p>Time</p>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className={styles.body}>{renderFaculties()}</tbody>
                    </table>
                    <div className={styles.pages}>{renderPages()}</div>
                </div>
            </div>
        </div>
    )
}
