import React from 'react'

import Trending from './Trending/TrendingItems'
import classes from './TrendingList.module.scss'

export default function TrendingList() {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid}>
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
            </div>
        </div>
    )
}
