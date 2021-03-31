import React, { useState } from 'react'

import classes from './YourContributionItems.module.scss'
import styles from '../../../pages/AdminDashboard/Users/user.module.css'
import classCoordinator from '../../../pages/CoordinatorDashboard/Coordinator.module.scss'
import eyeIcon from '../../../assets/img/eye-icon.png'
import penIcon from '../../../assets/img/pen.png'
import binIcon from '../../../assets/img/bin.png';

import { useDispatch } from 'react-redux';
import * as action from '../../../redux/action/ActionContribution'
import { NavLink } from 'react-router-dom';
export default function YourContributionItems(props) {
    let { contribution } = props
    const dispatch = useDispatch()
    let [contributionUpdate, setContributionUpdate] = useState({
        id:0,
        name: '',
        description: ''
    })
    let [contributionDelete,setContributionDelete]=useState({id:0})
    let handleChangeInput = (e) => {
        let { value, name } = e.target
        let newsValue = { ...contributionUpdate }
        newsValue[name] = value;
        setContributionUpdate(newsValue)
    }
    console.log(contribution);
    let renderContributionItem = () => {
        return contribution?.filter(contribute => contribute.isPublished === false).map((contribution, index) => {
            return <div key={index} className={`card ${classes.card}`}>
                <img className="card-img-top" src={`https://35.224.120.132/${contribution.thumbnail}`} alt="123" height="216px" />
                <div className={classes.overlay}></div>
                <NavLink to={`/student/uploaded-contribution/${contribution.id}`} type="button" className={`${classes.btn} ${classes.seeBtn}`}>
                    <img className={classes.icon} src={eyeIcon} alt="123" />
                            See Contribution
                </NavLink>
                <button type="button" className={`${classes.btn} ${classes.editBtn}`}
                    data-toggle='modal'
                    data-target='#exampleModalUpdate'
                    onClick={() => setContributionUpdate({
                        id:contribution.id,
                        name: contribution.name,
                        description: contribution.description
                    })}>
                    <img className={classes.icon} src={penIcon} alt="123" />
                            Edit Contribution
                </button>
                <button type="button" className={`${classes.btn} ${classes.deleteBtn}`}
                    data-toggle='modal'
                    data-target='#exampleModalDelete'
                    onClick={()=>{
                        setContributionDelete({id:contribution.id})
                    }}>
                    <img className={classes.icon} src={binIcon} alt="123" />
                            Delete Article
                </button>
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
                                    <span>
                                        Are you sure you want to delete{' '}
                                    </span>
                                    <span className='font-weight-bold'>
                                        " This is a contribution "
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
                                    onClick={()=>{
                                        deleteContribution(contributionDelete.id)
                                    }}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`modal fade ${classCoordinator.modalUpdate}`}
                    id='exampleModalUpdate'
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
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={contributionUpdate.name}
                                        onChange={handleChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input className="form-control" name="description" value={contributionUpdate.description}
                                        onChange={handleChangeInput} />
                                </div>
                            </div>
                            <div className='modal-footer '>
                                <div className="row mx-0 w-100">

                                    <div className="col-12 text-right px-0">
                                        <button
                                            type='button'
                                            className={classCoordinator.cancelButton}
                                            data-dismiss='modal'>
                                            Cancel
                                       </button>
                                        <button
                                            type='button'
                                            className={classCoordinator.updateButton}

                                            onClick={() => {
                                                updateContribution(contributionUpdate.id)
                                            }}>
                                            Confirm
                                     </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className={classes.cardTile}>{contribution.name}</h4>
                    <p className={classes.cardText}>{contribution.description}</p>
                </div>
            </div>
        })
    }
    let deleteContribution = (id) => {
        dispatch(action.handleDeleteContribution(id))
    }
    let updateContribution = (id) => {
        dispatch(action.handleUpdateContribution(id, contributionUpdate))
    }
    return (
        <div className={classes.grid}>
            {renderContributionItem()}
        </div>
    )
}
