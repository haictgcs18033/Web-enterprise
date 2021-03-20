import React from 'react'

import yourContributionIcon from '../../assets/img/people-icon.png'
import uploadIcon from '../../assets/img/upload.png'
import classes from './UploadContribution.module.css'
import contributionImg from '../../assets/img/contributionImg.jpg'
import eyeIcon from '../../assets/img/eye-icon.png'
import penIcon from '../../assets/img/pen.png'
import binIcon from '../../assets/img/bin.png'
import Background from '../../Components/Background'

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
                        <div className={`card ${classes.card}`}>
                            <img className="card-img-top" src={contributionImg} alt="123" />
                            <div className={classes.overlay}></div>

                            <button type="button" className={`${classes.btn} ${classes.seeBtn}`}>
                                <img className={classes.icon} src={eyeIcon} alt="123" />
                                See Contribution
                            </button>
                            <button type="button" className={`${classes.btn} ${classes.editBtn}`}>
                                <img className={classes.icon} src={penIcon} alt="123" />
                                Edit Contribution
                            </button>
                            <button type="button" className={`${classes.btn} ${classes.deleteBtn}`}>
                                <img className={classes.icon} src={binIcon} alt="123" />
                                Delete Article
                            </button>

                            <div className="card-body">
                                <h4 className={classes.cardTile}>This is a contribution</h4>
                                <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
