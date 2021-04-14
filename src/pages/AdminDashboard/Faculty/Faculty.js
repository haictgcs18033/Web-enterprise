/** @format */

import clsx from 'clsx';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../../redux/action/ActionForRedux';
import SearchIcon from '../../../assets/img/search-icon.png';
import SettingIcon from '../../../assets/img/Vector.png';
import moment from 'moment';
import styles from '../Users/user.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';


export default function Faculty() {
    const faculties = useSelector(
        (state) => state.webEnterpriseReducer.faculties
    );
    const load = useSelector((state) => state.webEnterpriseReducer.load);
    const totalFaculties = useSelector(
        (state) => state.webEnterpriseReducer.totalFaculties
    );
    const closureDateAdmin = useSelector(state => state.webEnterpriseReducer.closureDateAdmin)

    const createFaculty = useSelector(state => state.webEnterpriseReducer.createFaculty)
    let { name } = createFaculty.values
    const [curPage, setCurPage] = useState(1);
    let [keyword, setKeyword] = useState('')
    let [type, setType] = useState('')
    let [closureDate, setClosureDate] = useState(new Date());
    let [finalClosure, setFinalClosure] = useState(new Date());
    const limit = 6;
    let dispatch = useDispatch();
    const getFacultyList = useCallback(
        () => dispatch(action.fetchFaculty(limit, curPage, keyword, type)),
        [dispatch, limit, curPage, keyword, type]
    );
    useEffect(() => {
        getFacultyList();
    }, [getFacultyList]);
    const pageNumber = [];
    if (faculties) {
        for (let i = 1; i <= Math.ceil(totalFaculties / limit); i++) {
            pageNumber.push(i);
        }
    }

    let schema = yup.object().shape({
        name: yup.string()
            .required('⚠ Faculty name is required')
            .max(255, '⚠ Faculty name must not exceed 255 characters')
            .strict(true)
            .trim('⚠ This field must not contain whitespace at the beginning and end')
            .matches(/^[a-zA-Z ]*$/, 'Faculty name must not contain number or special characters'),
    })

    const { register, handleSubmit, errors, formState, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    let renderFaculties = () => {
        if (faculties.length > 0) {
            return faculties.map((faculty) => {
                return (
                    <tr key={faculty.id} className={styles.listItem}>
                        <td className={styles.listColumn}>
                            <p className={styles.username}>{faculty.name}</p>
                        </td>
                        <td className={styles.listColumn}>
                            <p className={styles.email}>
                                Create at {moment(faculty.createAt).format('LT')}-
                                {moment(faculty.createAt).format('L')}
                            </p>
                        </td>
                        <td>
                            <NavLink
                                to={`/admin/dashboard/faculty/setting/${faculty.id}`}
                                className='btn'>
                                <img className='setting-icon' src={SettingIcon} alt='setting' />
                            </NavLink>
                        </td>
                    </tr>
                );
            });
        }
    };
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
    };
    let handleInputFaculty = (e) => {
        let { value, name } = e.target
        let newValues = { ...createFaculty.values }
        newValues[name] = value
        dispatch(action.handleInput(newValues))
    }
    let handleCreateFaculty = (e) => {
        let faculty = { ...createFaculty.values }
        dispatch(action.createFacultyAdmin(faculty))
        reset({ name: "" })
    }
    closureDateAdmin.firstClosureDate = closureDate.toISOString()
    closureDateAdmin.secondClosureDate = finalClosure.toISOString()
    let settingClosureDate = (e) => {
        e.preventDefault()
        dispatch(action.handleClosureDate(closureDateAdmin))
    }
    return (
        <div className={`container-fluid ${styles.wrapper}`}>
            <div className={clsx(styles.tableWrap, load && styles.load)}>
                <div className='d-flex justify-content-between'>
                    <h3 className={styles.userTitle}>Faculties</h3>
                    <div className='d-flex'>
                        <button
                            type='button'
                            className={styles.setClosureBtn}
                            data-toggle='modal'
                            data-target='#closureDate'>
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
                        onSubmit={handleSubmit(handleCreateFaculty)}>
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
                                                    name='name'
                                                    defaultValue={name}
                                                    onChange={handleInputFaculty}
                                                    ref={register}
                                                />
                                                <p className='err-message'>
                                                    {errors.name?.message}
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
                                        className='btn btn__create'
                                        disabled={!formState.isDirty || (formState.isDirty && !formState.isValid)}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form
                        className='modal fade'
                        id='closureDate'
                        tabIndex='-1'
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'
                        onSubmit={settingClosureDate}>
                        <div className='modal-dialog' role='document'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>
                                        Set closure date
                                    </h5>
                                </div>
                                <div className='modal-body'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='form-group'>
                                                <label>Closure date</label>
                                                <DatePicker
                                                    selected={closureDate}
                                                    onChange={(date) => setClosureDate(date)}
                                                />
                                                <i class='fa fa-calendar'></i>
                                                <p className='err-message'>
                                                    {/* {errors.fullName?.message} */}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='form-group'>
                                                <label>Final closure date</label>
                                                <DatePicker
                                                    selected={finalClosure}
                                                    onChange={(date) => setFinalClosure(date)}
                                                />
                                                <i class='fa fa-calendar'></i>
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

                <div className={'user-form'}>
                    <div className='search-role'>
                        <div className='row'>
                            <div className='col-9'>
                                <input
                                    type='text'
                                    autocomplete="off"
                                    onChange={(e) => {
                                        setKeyword(e.target.value);
                                        setCurPage(1);
                                    }}
                                    placeholder='Search facullty name'
                                />
                                <img className='search-icon' src={SearchIcon} alt='search' />
                            </div>
                            <div className='col-3'>
                                <select
                                    className='role-select'
                                    name='id'
                                    onChange={(e) => {
                                        setType(e.target.value);
                                        setCurPage(1);
                                    }}>
                                    <option value='ASC'>Last Created </option>
                                    <option value='DESC'>Latest</option>
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
    );
}
