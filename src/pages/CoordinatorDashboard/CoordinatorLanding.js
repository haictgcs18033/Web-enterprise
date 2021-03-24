import React, { useCallback, useEffect, useState } from 'react'
import classes from '../CoordinatorDashboard/Coordinator.module.scss'
import contributionImg from '../../assets/img/contribution.png'
import eyeIcon from '../../assets/img/eye-icon.png'
import pen from '../../assets/img/pen.png'
import talk from '../../assets/img/talk.png'
import bin from '../../assets/img/bin.png'
import * as actionContribution from '../../redux/action/ActionContribution'
import { useDispatch, useSelector } from 'react-redux'
export default function CoordinatorLanding() {
    const contributionList = useSelector(state => state.contributionReducer.contributionList)
    let [curPage] = useState(1);
    let dispatch = useDispatch()
    let limit = 10
    const getContribution = useCallback(
        () => dispatch(actionContribution.getContributionList(curPage, limit)),
        [dispatch, curPage, limit]
    );
    useEffect(() => {
        getContribution()
    }, [getContribution])
    console.log(contributionList);
    let renderPublishContribution = () => {
        return contributionList.map((contribution, index) => {
            return <div key={index} className={`col-sm-6 col-md-6 col-lg-4 col-xl-4 my-2`}>
                <div className={`card ${classes.cardWaiting}`}>
                    <img className="card-img-top" src={contributionImg} alt="123" />
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
    return (
        <div className="container">
            <div className={classes.waitingPublic}>
                <h3>Waiting for public</h3>
                <div className={`container-fluid`}>
                    <div className={`row mx-0`}>
                        <div className={`col-sm-6 col-md-6 col-lg-4 col-xl-4 my-2`}>
                            <div className={`card ${classes.cardWaiting}`}>
                                <img className="card-img-top" src={contributionImg} alt="123" />
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
                                            <img className={classes.icon} src={pen} alt="123" />
                                            <p className="mb-0"> Edit Contribution</p>
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
                                    <h4 className={classes.cardTitle}>Cotribute</h4>
                                    <p className={classes.cardText}>this is contribute</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={classes.contributePublish}>
                <h3>Published Contributions</h3>
                <div className={`container-fluid ${classes.publishContainer}`}>
                    <div className={`row mx-0`}>
                        {renderPublishContribution()}
                    </div>
                    <div className="d-block text-center">
                        <button>SHOW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
