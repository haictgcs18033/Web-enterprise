import React, { useCallback, useEffect } from 'react'

import yourContributionIcon from '../../assets/img/people-icon.png'
import uploadIcon from '../../assets/img/upload.png'
import classes from './UploadContribution.module.scss'
import Background from '../../Components/Background'
import UploadedContribution from '../../Components/UploadedContribution/UploadedContribution'
import * as action from '../../redux/action/ActionContribution'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClosureDate } from '../../redux/action/ActionForRedux'
import moment from 'moment'
export default function UploadContribution(props) {
    let { id } = useParams()
    console.log(id);
    let closureDateAdmin = useSelector(state => state.webEnterpriseReducer.closureDateAdmin)
    const contributionComment = useSelector(state => state.contributionReducer.contributionComment)
    console.log(contributionComment);
    let dispatch = useDispatch()
    const getComment = useCallback(
        () => dispatch(action.getContributionComment(id)),
        [dispatch, id]
    );
    useEffect(() => {
        getComment()
    }, [getComment])
    let count = contributionComment.length
    useEffect(() => {
        dispatch(fetchClosureDate())
    }, [dispatch])
    return (
        <div>
            <Background />
            <div className={classes.container}>
                <div className={classes.gridContainer}>
                    <div className={classes.submitArticleBox}>
                        <h2 className={classes.submitArticle}>
                            Submit article
                        </h2>
                        <table className={classes.table}>
                            <thead>
                                <tr>
                                    <th className={classes.tableHeader}>Submission status</th>
                                    <td className={classes.tableData}>Not yet</td>
                                </tr>
                                <tr >
                                    <th className={classes.tableHeader}>Closure date</th>
                                    <td className={classes.tableData}>
                                        {moment(closureDateAdmin.firstClosureDate).format('L')}-{moment(closureDateAdmin.firstClosureDate).format('LT')}
                                    </td>
                                </tr>
                                <tr>
                                    <th className={classes.tableHeader}>Final closure date</th>
                                    <td className={classes.tableData}>
                                        {moment(closureDateAdmin.secondClosureDate).format('L')}-{moment(closureDateAdmin.secondClosureDate).format('LT')}
                                    </td>
                                </tr>
                                <tr>
                                    <th className={classes.tableHeader}>Last modified</th>
                                    <td className={classes.tableData}>cc</td>
                                </tr>
                                <tr>
                                    <th className={classes.tableHeader}>Submission comments</th>
                                    <td className={classes.tableData}>
                                        {contributionComment.length === 0 ? 'Not yet' :
                                        <NavLink to={`/student/comment/${id}`}>
                                            {`${count} comment`}
                                        </NavLink>
                                        }
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <NavLink className={classes.btnUpload} to="/student/contribution-submit">
                            <span><img className={classes.uploadIcon} src={uploadIcon} alt="123" /></span>
                            Upload Contribution
                        </NavLink>
                    </div>

                    <div className={classes.yourContributionsBox}>
                        <h2 className={classes.yourContribution}>
                            <span><img className={classes.yourContributionIcon} src={yourContributionIcon} alt="123" /></span>
                        Your Contributions
                        </h2>
                        <UploadedContribution />
                    </div>
                </div>
            </div>
        </div>
    )
}
