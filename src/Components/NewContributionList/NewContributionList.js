import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewContributionItems from './NewContributionItems/NewContributionItems'
import * as actionContribution from '../../../src/redux/action/ActionContribution'
import classes from './NewContributionList.module.scss'

export default function NewContributionList() {
    const contributionList = useSelector(state => state.contributionReducer.contributionList)
    console.log(contributionList);
    let [curPage] = useState(1);
    let dispatch = useDispatch()
    let limit = 10
    const getContribution = useCallback(
        () => dispatch(actionContribution.getContributionList(curPage, limit)),
        [dispatch, curPage, limit]
    );
    useEffect(() => {
        getContribution()
    }, [getContribution])

    return (
        <div>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    <NewContributionItems contribution={contributionList} />
                </div>
            </div>
        </div>
    )
}
