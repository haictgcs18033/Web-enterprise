import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewContribution from './NewContribution/NewContribution'
import * as actionContribution from '../../../src/redux/action/ActionContribution'
import classes from './NewContributions.module.scss'

export default function NewContributions() {
    const contributionList=useSelector(state => state.contributionReducer.contributionList)
    console.log(contributionList);
    let [curPage]=useState(1);
    let dispatch=useDispatch()
    let limit=10
    const getContribution = useCallback(
        () => dispatch(actionContribution.getContributionList(curPage,limit)),
        [dispatch, curPage,limit]
    );
    useEffect(()=>{
       getContribution()
    },[getContribution])
   
    return (
        <div>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    <NewContribution contribution={contributionList} />
                    {/* <NewContribution />
                    <NewContribution />
                    <NewContribution />
                    <NewContribution />
                    <NewContribution /> */}
                </div>
            </div>
        </div>
    )
}
