import React from 'react'

import classes from './Trending.module.scss'

export default function Trending() {
    return (
        <div>
            <div className="trend-contribute">
                <div className={classes.trendIntro}>
                    <span className={classes.number}>01</span>
                    <p className={classes.author}>Author name</p>
                </div>
                <div className={classes.trendContent}>
                    <h4 className={classes.topic}>This is the topic of the trending contribution</h4>
                    <p className={classes.comment}>Jan 28 - 30 views</p>
                </div>
            </div>
        </div>
    )
}
