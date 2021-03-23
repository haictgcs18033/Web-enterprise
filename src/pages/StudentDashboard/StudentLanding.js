import React from 'react'

import yourContributionIcon from '../../assets/img/people-icon.png'
import notifyIcon from '../../assets/img/notifyIcon.png'
import Background from '../../Components/Background'
import classes from './StudentLanding.module.scss'
import NewContributions from '../../Components/NewContributions/NewContributions'
import ContributionList from '../../Components/YourContributions/ContributionList'

export default function StudentLanding() {
    return (
        <div>
            <Background />
            <div className="container">
                <h2 className={classes.contributionTitle}>
                    <span><img className={classes.yourContributionIcon} src={yourContributionIcon} alt="123" /></span>
                    Your Contributions
                </h2>
                <ContributionList />
            </div>

            <div className="container">
                <h2 className={classes.contributionTitle}>
                    <span><img className={classes.notifyIcon} src={notifyIcon} alt="123" /></span>
                    New Contributions
                </h2>
                <NewContributions />
                <div className="text-center">
                    <button type="button" className="show-btn">show more</button>
                </div>
            </div>
        </div >
    )
}
