import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewContributionItems from './NewContributionItems/NewContributionItems'
import * as action from '../../../src/redux/action/ActionContribution'
import classes from './NewContributionList.module.scss'

export default function NewContributionList() {
    const contributionPublishList = useSelector(state => state.contributionReducer.contributionPublishList)
    let [curPage] = useState(1);
    let dispatch = useDispatch()
    let limit = 10
    const getContributionPublish = useCallback(
        () => dispatch(action.getContributionPublishList(curPage, limit)),
        [dispatch, curPage, limit]
    );
    useEffect(() => {
        getContributionPublish()
    }, [getContributionPublish])
   
    return (
        <div className={classes.gridContainer}>
            <NewContributionItems contribution={contributionPublishList} />
        </div>
    )
}
