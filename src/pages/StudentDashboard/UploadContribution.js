import React from 'react'

import yourContributionIcon from '../../assets/img/people-icon.png'
import uploadIcon from '../../assets/img/upload.png'
import classes from './UploadContribution.module.scss'
import Background from '../../Components/Background'
import UploadedContribution from '../../Components/UploadedContribution/UploadedContribution'
import { NavLink } from 'react-router-dom'

export default function UploadContribution() {
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
                                    <th>Submission status</th>
                                    <td>Not yet</td>
                                </tr>
                                <tr >
                                    <th>Closure date</th>
                                    <td>cc</td>
                                </tr>
                                <tr>
                                    <th>Final closure date</th>
                                    <td>cc</td>
                                </tr>
                                <tr>
                                    <th>Last modified</th>
                                    <td>cc</td>
                                </tr>
                                <tr>
                                    <th>Submission comments</th>
                                    <td>Not yet</td>
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
