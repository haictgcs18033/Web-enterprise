import React from 'react'

import TrendingItems from './TrendingItems/TrendingItems'
import classes from './TrendingList.module.scss'

export default function TrendingList() {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid}>
                <TrendingItems />
                <TrendingItems />
                <TrendingItems />
                <TrendingItems />
                <TrendingItems />
                <TrendingItems />
            </div>
        </div>
    )
}
