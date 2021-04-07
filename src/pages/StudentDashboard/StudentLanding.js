/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import yourContributionIcon from '../../assets/img/people-icon.png';
import notifyIcon from '../../assets/img/notifyIcon.png';
import classes from './StudentLanding.module.scss';
import NewContributionList from '../../Components/NewContributionList/NewContributionList';
import YourContributionList from '../../Components/YourContributionList/YourContributionList';
import * as action from '../../redux/action/ActionContribution';

export default function StudentLanding() {
  const contributionList = useSelector(
    (state) => state.contributionReducer.contributionList
  );
  const contributionPublishList = useSelector(
    (state) => state.contributionReducer.contributionPublishList
  );
  const totalContribution = useSelector(
    (state) => state.contributionReducer.totalContribution
  );
  let [curPage, setCurPage] = useState(1);
  let dispatch = useDispatch();
  let limit = 6;
  const getContribution = useCallback(
    () => dispatch(action.getContributionList(1, 99)),
    [dispatch]
  );
  const getPublishedContribution = useCallback(
    () => dispatch(action.getContributionPublishList(curPage, limit)),
    [dispatch, curPage, limit]
  );
  useEffect(() => {
    dispatch({
      type: 'RESET_PUBLISH_STATE',
    });
  }, [dispatch]);

  useEffect(() => {
    getContribution();
  }, [getContribution]);

  useEffect(() => {
    getPublishedContribution();
  }, [getPublishedContribution]);
  return (
    <div>
      <div className='container'>
        <h2 className={classes.contributionTitle}>
          <span>
            <img
              className={classes.yourContributionIcon}
              src={yourContributionIcon}
              alt='123'
            />
          </span>
          Your Contributions
        </h2>
        <YourContributionList contributionList={contributionList} />
      </div>

      <div className='container'>
        <h2 className={classes.contributionTitle}>
          <span>
            <img className={classes.notifyIcon} src={notifyIcon} alt='123' />
          </span>
          New Contributions
        </h2>
        <NewContributionList
          nextPage={() => setCurPage(curPage + 1)}
          total={totalContribution}
          contributionPublishList={contributionPublishList}
        />
      </div>
    </div>
  );
}
