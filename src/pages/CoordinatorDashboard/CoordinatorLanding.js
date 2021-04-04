import React, { useCallback, useEffect, useState } from 'react'
import classes from '../CoordinatorDashboard/Coordinator.module.scss'
import styles from '../AdminDashboard/Users/user.module.css'
import eyeIcon from '../../assets/img/eye-icon.png'
import pen from '../../assets/img/pen.png'
import talk from '../../assets/img/talk.png'
import bin from '../../assets/img/bin.png'
import * as actionContribution from '../../redux/action/ActionContribution'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export default function CoordinatorLanding() {
    const contributionPublishList = useSelector(state => state.contributionReducer.contributionPublishList)
    const contributionList = useSelector(state => state.contributionReducer.contributionList)
    let [curPage] = useState(1);
    let [contributionUpdate, setContributionUpdate] = useState({
        id: 0,
        name: '',
        description: ''
    })
    let [contributionDelete, setContributionDelete] = useState({ id: 0 })
    let dispatch = useDispatch()
    let limit = 10
    const getContributionPublish = useCallback(
        () => dispatch(actionContribution.getContributionPublishList(curPage, limit)),
        [dispatch, curPage, limit]
    );
    const getContribution = useCallback(
        () => dispatch(actionContribution.getContributionList(curPage, limit)),
        [dispatch, curPage, limit]
    );
    useEffect(() => {
        getContributionPublish()
    }, [getContributionPublish])
    useEffect(() => {
        getContribution()
    }, [getContribution])


    let renderPublishContribution = () => {
        return contributionPublishList.map((contribution, index) => {
            return <div key={index} className={`col-sm-6 col-md-6 col-lg-4 col-xl-4 my-2`}>
                <div className={`card ${classes.cardWaiting}`}>
                    <img className="card-img-top" src={`https://35.224.120.132/${contribution.thumbnail}`} alt="123" height="216px" />
                    <div className={classes.overlay}></div>
                    <div className={classes.groupButton}>
                        <button type="button" className={`${classes.contributionBtn}`}>
                            <div className="d-flex">
                                <img className={classes.icon} src={eyeIcon} alt="123" />
                                <p className="mb-0"> See Contribution</p>
                            </div>
                        </button>
                        <button type="button" className={classes.contributionBtn}>
                            <div className="d-flex">
                                <img className={classes.icon} src={talk} alt="123" />
                                <p className="mb-0"> Comment</p>
                            </div>
                        </button>
                        <button type="button" className={classes.contributionBtn}>
                            <div className="d-flex">
                                <img className={classes.icon} src={bin} alt="123" />
                                <p className="mb-0"> Delete Article</p>
                            </div>
                        </button>
                    </div>

                    <div className="card-body">
                        <h4 className={classes.cardTitle}>{contribution.name}</h4>
                        <p className={classes.cardText}>{contribution.description}</p>
                    </div>
                </div>
            </div>
        })
    }

    let waitingContribution = () => {
        return contributionList?.filter(contribution => contribution.isPublished === false).map((contribution, index) => {
            return <>
                <div className={`col-sm-6 col-md-6 col-lg-4 col-xl-4 my-2`}>
                    <div key={index} className={`card ${classes.cardWaiting}`}>
                        <img className="card-img-top" src={`https://35.224.120.132/${contribution.thumbnail}`} alt="123" />
                        <div className={classes.overlay}></div>
                        <div className={classes.groupButton}>
                            <button type="button" className={`${classes.contributionBtn}`}>
                                <div className="d-flex">
                                    <img className={classes.icon} src={eyeIcon} alt="123" />
                                    <p className="mb-0"> See Contribution</p>
                                </div>
                            </button>
                            <NavLink to={`/coordinator/comment/${contribution.id}`} type="button" className={classes.contributionBtn}>
                                <div className="d-flex">
                                    <img className={classes.icon} src={talk} alt="123" />
                                    <p className="mb-0"> Comment</p>
                                </div>
                            </NavLink>
                            <button type="button" className={classes.contributionBtn}
                                data-toggle='modal'
                                data-target='#exampleModalUpdate'
                                onClick={() => setContributionUpdate({
                                    id: contribution.id,
                                    name: contribution.name,
                                    description: contribution.description
                                })}>
                                <div className="d-flex">
                                    <img className={classes.icon} src={pen} alt="123" />
                                    <p className="mb-0"> Edit Contribution</p>
                                </div>
                            </button>
                            <button type="button" className={`btn ${classes.contributionBtn}`}
                                data-toggle='modal'
                                data-target='#exampleModalDelete'
                                onClick={() => {
                                    setContributionDelete({ id: contribution.id })
                                }}>
                                <div className="d-flex">
                                    <img className={classes.icon} src={bin} alt="123" />
                                    <p className="mb-0"> Delete Article</p>
                                </div>
                            </button>
                        </div>
                        <div className="card-body">
                            <h4 className={classes.cardTitle}>{contribution.name}</h4>
                            <p className={classes.cardText}>{contribution.description}</p>
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
                                        onClick={() => {
                                            deleteContribution(contributionDelete.id)
                                        }}>
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`modal fade ${classes.modalUpdate}`}
                        id='exampleModalUpdate'
                        tabIndex={-1}
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'>
                        <div className={`modal-dialog ${classes.modalDiaglog}`} role='document'>
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
                                        <div className="col-3 text-left px-0">
                                            <button className={classes.publishButton}
                                                onClick={() => {
                                                    publishContribution(contribution.id, contribution)
                                                }}
                                                data-dismiss='modal'>Publish</button>
                                        </div>
                                        <div className="col-9 text-right px-0">
                                            <button
                                                type='button'
                                                className={classes.cancelButton}
                                                data-dismiss='modal'>
                                                Cancel
                                </button>
                                            <button
                                                type='button'
                                                className={classes.updateButton}

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
                </div>
            </>
        })
    }
    let deleteContribution = (id) => {
        dispatch(actionContribution.handleDeleteContribution(id))
    }
    let handleChangeInput = (e) => {
        let { value, name } = e.target
        let newsValue = { ...contributionUpdate }
        newsValue[name] = value;
        setContributionUpdate(newsValue)
    }
    let updateContribution = (id) => {
        dispatch(actionContribution.handleUpdateContribution(id, contributionUpdate))
    }
    let publishContribution = (id, contribution) => {
        dispatch(actionContribution.handlePublishContribution(id, contribution))
    }
    return (

        <div className="container">
            <div className={classes.waitingPublic}>
                <h3>Waiting for public</h3>
                <div className={`container-fluid`}>
                    <div className={`row mx-0`}>
                        {waitingContribution()}
                    </div>
                </div>

            </div>
            <div className={classes.contributePublish}>
                <h3>Published Contributions</h3>
                <div className={`container-fluid ${classes.publishContainer}`}>
                    <div className={`row mx-0`}>
                        {renderPublishContribution()}
                    </div>
                    {/* <div className="d-block text-center">
                        <button>SHOW MORE</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
