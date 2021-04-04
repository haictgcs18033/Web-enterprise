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
export default function NewContributionList({
  contributionPublishList,
  nextPage,
  total,
}) {
  return (
    <>
      <div className={classes.gridContainer}>
        <NewContributionItems contribution={contributionPublishList} />
      </div>

      {contributionPublishList?.length === total ? null : (
        <div className='text-center'>
          <button onClick={nextPage} type='button' className='show-btn'>
            show more
          </button>
        </div>
      )}
    </>
  );
}
