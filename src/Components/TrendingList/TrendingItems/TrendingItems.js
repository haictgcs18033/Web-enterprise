import React from 'react'

import classes from './TrendingItems.module.scss'

export default function TrendingItems(props) {
    let { trending } = props;

    let renderTrendingItems = () => {
        return trending.map((trend, index) => {
            return <div className="trend-contribute">
                <div className={classes.trendIntro}>
                    <span className={classes.number}>{index + 1}</span>
                    <p className={classes.author}>{trend.authorName}</p>
                </div>
                <div className={classes.trendContent}>
                    <h4 className={classes.topic}>{trend.description}</h4>
                    <p className={classes.comment}>{trend.views}</p>
                </div>
            </div>
        })
    }
    return (
        <div className={classes.grid}>
            {renderTrendingItems()}
        </div>
    )
}