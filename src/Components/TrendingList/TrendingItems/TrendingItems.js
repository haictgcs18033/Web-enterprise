/** @format */

import React from 'react';
import { useHistory } from 'react-router';
import classes from './TrendingItems.module.scss';

export default function TrendingItems(props) {
    let { trending } = props;

    const history = useHistory();


    let renderTrendingItems = () => {
        if (trending) {
            return trending.slice(0, 6)?.map((trend, index) => {
                const options = { month: 'long', day: 'numeric' };
                let date = new Date(trend.createAt).toLocaleDateString(
                    'en-US',
                    options
                );
                return (
                    <div
                        key={index}
                        onClick={() => history.push(`/contribution-detail/${trend.id}`)}
                        className={classes.trendContribute}>
                        <div className={classes.trendIntro}>
                            <span className={classes.number}>0{index + 1}</span>
                            <p className={classes.author}>{trend.authorName}</p>
                        </div>
                        <div className={classes.trendContent}>
                            <h4 className={classes.topic}>{trend.name}</h4>
                            <p className={classes.comment}>
                                {date} - {trend.views} views
                            </p>
                        </div>
                    </div>
                );
            });
        }
    };
    return <div className={classes.grid}>{renderTrendingItems()}</div>;
}
