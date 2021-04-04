import React from 'react'

import yourContributionIcon from '../../assets/img/people-icon.png'
import notifyIcon from '../../assets/img/notifyIcon.png'
import classes from './StudentLanding.module.scss'
import NewContributionList from '../../Components/NewContributionList/NewContributionList'
import YourContributionList from '../../Components/YourContributionList/YourContributionList'

export default function StudentLanding() {
    return (
        <div>
            <div className="container">
                <h2 className={classes.contributionTitle}>
                    <span><img className={classes.yourContributionIcon} src={yourContributionIcon} alt="123" /></span>
                    Your Contributions
                </h2>
                <YourContributionList />
            </div>

            <div className="container">
                <h2 className={classes.contributionTitle}>
                    <span><img className={classes.notifyIcon} src={notifyIcon} alt="123" /></span>
                    New Contributions
                </h2>
                <NewContributionList />
            </div>
        </div >
    )
}
