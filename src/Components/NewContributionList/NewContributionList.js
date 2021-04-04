/** @format */


import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewContributionItems from './NewContributionItems/NewContributionItems';
import classes from './NewContributionList.module.scss';
import * as action from '../../redux/action/ActionContribution'
export default function NewContributionList(props) {
  const contributionPublishList = useSelector(
    (state) => state.contributionReducer.contributionPublishList
  );

  const totalContribution = useSelector(
    (state) => state.contributionReducer.totalContribution
  );

  let [curPage, setCurPage] = useState(1);
  let dispatch = useDispatch();
  let limit = 6;
  const getContributionPublish = useCallback(
    () => dispatch(action.getContributionPublishList(curPage, limit)),
    [dispatch, curPage, limit]
  );
  useEffect(() => {
    getContributionPublish();
  }, [getContributionPublish, curPage, limit]);
  const nextPage = () => {
    setCurPage(curPage + 1);
  };
  console.log(contributionPublishList);
  return (
    <>
      <div className={classes.gridContainer}>
        <NewContributionItems contribution={contributionPublishList} />
      </div>
      {contributionPublishList?.length === totalContribution ? null : (
        <div className='text-center'>
          <button onClick={nextPage} type='button' className='show-btn'>
            show more
          </button>
        </div>
      )}
    </>
  );
}
