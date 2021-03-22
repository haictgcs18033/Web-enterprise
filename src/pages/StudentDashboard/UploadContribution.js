import React from 'react'

import yourContributionIcon from '../../assets/img/people-icon.png'
import uploadIcon from '../../assets/img/upload.png'
import classes from './UploadContribution.module.scss'
import Background from '../../Components/Background'
import YourContribution from '../../Components/YourContributions/YourContribution/YourContribution'

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
                                    <td>
                                        <p className={classes.content}>cl</p>
                                    </td>
                                    <td>
                                        <p className={classes.content}>cc</p>
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        <p className={classes.content}>cl</p>
                                    </td>
                                    <td>
                                        <p className={classes.content}>cc</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className={classes.content}>cl</p>
                                    </td>
                                    <td>
                                        <p className={classes.content}>cc</p>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <button className={classes.btnUpload}>
                            <span><img className={classes.uploadIcon} src={uploadIcon} alt="123" /></span>
                            Upload Contribution
                    </button>

                    </div>

                    <div className={classes.yourContributionsBox}>
                        <h2 className={classes.yourContribution}>
                            <span><img className={classes.yourContributionIcon} src={yourContributionIcon} alt="123" /></span>
                        Your Contributions
                    </h2>
                        <YourContribution />
                    </div>
                </div>
            </div>
        </div>
    )
}
