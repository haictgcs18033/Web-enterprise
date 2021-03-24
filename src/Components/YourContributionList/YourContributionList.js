import React from 'react'
import YourContributionItems from './YourContributionItems/YourContributionItems'

import classes from './YourContributionList.module.scss'

export default function YourContributionList() {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid}>
                <YourContributionItems />
                <YourContributionItems />
                <YourContributionItems />
            </div>
        </div>
    )
}
