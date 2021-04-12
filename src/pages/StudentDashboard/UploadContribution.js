/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import uploadIcon from '../../assets/img/upload.png';
import DeleteIcon from '../../assets/icons/Delete';
import EditIcon from '../../assets/icons/Edit';
import classes from './UploadContribution.module.scss';
import styles from '../AdminDashboard/Users/user.module.css';
import * as action from '../../redux/action/ActionContribution';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClosureDate } from '../../redux/action/ActionForRedux';
import * as actionContribution from '../../redux/action/ActionContribution';
import moment from 'moment';
export default function UploadContribution() {
    let { id } = useParams();
    const history = useHistory();
    const contributionList = useSelector(
        (state) => state.contributionReducer.contributionList
    );

    let closureDateAdmin = useSelector(
        (state) => state.webEnterpriseReducer.closureDateAdmin
    );
    const contributionComment = useSelector(
        (state) => state.contributionReducer.contributionComment
    );
    let dispatch = useDispatch();
    const getComment = useCallback(
        () => dispatch(action.getContributionComment(id)),
        [dispatch, id]
    );
    const getContribution = useCallback(
        () => dispatch(actionContribution.getContributionList(1, 99)),
        [dispatch]
    );
    useEffect(() => {
        getContribution();
    }, [getContribution]);
    useEffect(() => {
        getComment();
    }, [getComment]);
    useEffect(() => {
        dispatch(fetchClosureDate());
    }, [dispatch]);
    let count = contributionComment.length;

    let [contributionUpdate, setContributionUpdate] = useState({
        id: 0,
        name: '',
        description: ''
    })

    let handleChangeInput = (e) => {
        let { value, name } = e.target;
        let newValues = { ...contributionUpdate };
        newValues[name] = value;
        setContributionUpdate(newValues);
    }

    let renderStatus = (contributionList) => {
        if (contributionList) {
            const isPublished =
                contributionList[0] && contributionList[0].isPublished;
            if (contributionList?.length === 0) {
                return 'Not yet';
            } else if (contributionList?.length > 0 && isPublished === true) {
                return 'Published';
            } else if (contributionList?.length > 0) {
                return 'Submitted';
            }
        }
    };
    const renderControlButton = (contributionList) => {
        if (contributionList) {
            const isPublished =
                contributionList[0] && contributionList[0].isPublished;
            if (contributionList?.length === 0) {
                return (
                    <NavLink
                        className={classes.btnUpload}
                        to='/student/contribution-submit'>
                        <span>
                            <img
                                className={classes.uploadIcon}
                                src={uploadIcon}
                                alt='upload'
                            />
                        </span>
                        Upload Contribution
                    </NavLink>
                );
            } else if (contributionList?.length > 0 && isPublished === true) {
                return (
                    <>
                        <button className={classes.btnDelete}
                            data-toggle='modal'
                            data-target='#exampleModalDeleteUpload'>
                            <DeleteIcon />
                            <p>Delete Contribution</p>
                        </button>
                        <div
                            className='modal fade'
                            id='exampleModalDeleteUpload'
                            tabIndex={-1}
                            role='dialog'
                            aria-labelledby='exampleModalLabel'
                            aria-hidden='true'>
                            <div className='modal-dialog' role='document'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h5 className='modal-title' id='exampleModalLabel'>
                                            Delete Contribution
                                        </h5>
                                    </div>
                                    <div className='modal-body'>
                                        <p>
                                            <span>Are you sure you want to delete </span>
                                            <span className='font-weight-bold'>
                                                " This is a contribution "
                                            </span>
                                        </p>
                                    </div>
                                    <div className='modal-footer'>
                                        <button
                                            className={`btn ${styles.modalDeleteClose}`}
                                            data-dismiss='modal'>
                                            Close
                                        </button>
                                        <button
                                            className={`btn ${styles.modalDelete}`}
                                            data-dismiss='modal'
                                            onClick={async () => {
                                                await deleteContribution(contributionList[0].id); await redirectStudentHome();
                                            }}>
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            } else if (contributionList?.length > 0) {
                return (
                    <>
                        <div className={classes.controlWrap}>
                            <button className={classes.btnEdit}
                                data-toggle='modal'
                                data-target='#exampleModalEdit'
                                onClick={() =>
                                    setContributionUpdate({
                                        id: contributionList[0].id,
                                        name: contributionList[0].name,
                                        description: contributionList[0].description,
                                    })}>
                                <EditIcon />
                                <p>Edit Contribution</p>
                            </button>
                            <button className={classes.btnDelete}
                                data-toggle='modal'
                                data-target='#exampleModalDelete'>
                                <DeleteIcon />
                                <p>Delete Contribution</p>
                            </button>
                        </div>
                        <div
                            className='modal fade'
                            id='exampleModalEdit'
                            tabIndex={-1}
                            role='dialog'
                            aria-labelledby='exampleModalLabel'
                            aria-hidden='true'>
                            <div className='modal-dialog' role='document'>
                                <div className='modal-content'>
                                    <div className='modal-header text-center'>
                                        <h5 className='modal-title ' id='exampleModalLabel'>
                                            Edit Contribution
                                        </h5>
                                    </div>
                                    <div className='modal-body'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input
                                                className='form-control'
                                                name='name'
                                                value={contributionUpdate.name}
                                                onChange={handleChangeInput}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>Description</label>
                                            <input
                                                className='form-control'
                                                name='description'
                                                value={contributionUpdate.description}
                                                onChange={handleChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-footer '>
                                        <div className='row mx-0 w-100'>
                                            <div className='col-12 text-right px-0'>
                                                <button
                                                    type='button'
                                                    className={styles.cancelButton}
                                                    data-dismiss='modal'>
                                                    Cancel
                                                </button>
                                                <button
                                                    type='button'
                                                    className={styles.updateButton}
                                                    onClick={() => {
                                                        updateContribution(contributionUpdate.id);
                                                    }}
                                                >
                                                    Confirm
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            Delete Contribution
                                        </h5>
                                    </div>
                                    <div className='modal-body'>
                                        <p>
                                            <span>Are you sure you want to delete </span>
                                            <span className='font-weight-bold'>
                                                " This is a contribution "
                                            </span>
                                        </p>
                                    </div>
                                    <div className='modal-footer'>
                                        <button
                                            className={`btn ${styles.modalDeleteClose}`}
                                            data-dismiss='modal'>
                                            Close
                                        </button>
                                        <button
                                            className={`btn ${styles.modalDelete}`}
                                            data-dismiss='modal'
                                            onClick={async () => {
                                                await deleteContribution(contributionList[0].id); await redirectStudentHome();
                                            }}>
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            }
        }
    };

    let updateContribution = (id) => {
        dispatch(action.handleUpdateContribution(id, contributionUpdate));
    };

    let deleteContribution = (id) => {
        dispatch(actionContribution.handleDeleteContribution(id));
    };
    let redirectStudentHome = () => {
        history.push('/')
    }
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.gridContainer}>
                    <div className={classes.submitArticleBox}>
                        <div className={`container ${classes.uploadContainer}`}>
                            <h2 className={classes.submitArticle}>Submit article</h2>
                            <table className={classes.table}>
                                <tbody>
                                    <tr>
                                        <th className={classes.tableHeader}>Submission status</th>
                                        <td className={classes.tableData}>
                                            {renderStatus(contributionList)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={classes.tableHeader}>Closure date</th>
                                        <td className={classes.tableData}>
                                            {moment(closureDateAdmin.firstClosureDate).format('L')}-
                                            {moment(closureDateAdmin.firstClosureDate).format('LT')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={classes.tableHeader}>Final closure date</th>
                                        <td className={classes.tableData}>
                                            {moment(closureDateAdmin.secondClosureDate).format('L')}-
                                            {moment(closureDateAdmin.secondClosureDate).format('LT')}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className={classes.tableHeader}>Submission comments</th>
                                        <td className={classes.tableData}>
                                            {count === 0 ? (
                                                'Not yet'
                                            ) : (
                                                <NavLink to={`/student/comment/${id}`}>
                                                    {count} comments
                                                </NavLink>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {renderControlButton(contributionList)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
