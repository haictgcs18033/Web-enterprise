import React from 'react'

import Trending from './Trending/Trending'
import classes from './Trendings.module.scss'

export default function Trendings() {
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
