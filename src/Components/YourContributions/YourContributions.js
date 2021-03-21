import React from 'react'
import YourContribution from './YourContribution/YourContribution'

import classes from './YourContributions.module.scss'

export default function YourContributions() {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid}>
                <YourContribution />
                <YourContribution />
                <YourContribution />
            </div>
        </div>
    )
}
