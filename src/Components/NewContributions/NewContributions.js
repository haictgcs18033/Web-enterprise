import React from 'react'
import NewContribution from './NewContribution/NewContribution'

import classes from './NewContributions.module.scss'

export default function NewContributions() {
    return (
        <div>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    <NewContribution />
                    <NewContribution />
                    <NewContribution />
                    <NewContribution />
                    <NewContribution />
                    <NewContribution />
                </div>
            </div>
        </div>
    )
}
