import React from 'react'
import ContributionItems from './ContributionItems/YourContributionItems'

import classes from './YourContributionList.module.scss'

export default function ContributionList() {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid}>
                <ContributionItems />
                <ContributionItems />
                <ContributionItems />
            </div>
        </div>
    )
}
