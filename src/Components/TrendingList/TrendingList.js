import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TrendingItems from './TrendingItems/TrendingItems'
import * as action from '../../../src/redux/action/ActionContribution'
import classes from './TrendingList.module.scss'

export default function TrendingList() {
    const Trendings = useSelector(state => state.contributionReducer.contributionPublishList);
    let [curPage] = useState(1);
    let dispatch = useDispatch();
    let limit = 6;
    const getTrending = useCallback(
        () => dispatch(action.getContributionPublishList(curPage, limit)),
        [dispatch, curPage, limit]
    );

    useEffect(() => {
        getTrending()
    }, [getTrending])

    return (
        <div className={classes.gridContainer}>
            <TrendingItems trending={Trendings} />
        </div>
    )
}
