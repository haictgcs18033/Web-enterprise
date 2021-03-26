import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import YourContributionItems from './YourContributionItems/YourContributionItems'
import * as action from '../../redux/action/ActionContribution'
import classes from './YourContributionList.module.scss'

export default function YourContributionList() {
    const contributionList = useSelector(state => state.contributionReducer.contributionList)
    console.log(contributionList);
    let [curPage] = useState(1);
    let dispatch = useDispatch()
    let limit = 10
    const getContribution = useCallback(
        () => dispatch(action.getContributionList(curPage, limit)),
        [dispatch, curPage, limit]
    );
    useEffect(() => {
        getContribution()
    }, [getContribution])

    return (
        <div className={classes.gridContainer}>
                <YourContributionItems contribution={contributionList}/>
        </div>
    )
}
