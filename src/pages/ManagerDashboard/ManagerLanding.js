/** @format */

import React, { useCallback, useEffect, useState } from 'react';

import classes from './ManagerLanding.module.scss';
// import ArrowRight from '../../assets/img/caret-right.png';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../redux/action/ActionForRedux';
import { NavLink } from 'react-router-dom';
import { fetchReport } from '../../redux/action/ActionContribution';
export default function ManagerLanding() {
  const faculties = useSelector(
    (state) => state.webEnterpriseReducer.faculties
  );
  const report = useSelector((state) => state.webEnterpriseReducer.report);
  const dispatch = useDispatch();
  const [curPage] = useState(1);
  let limit = 99;
  let getFacultyList = useCallback(() => {
    dispatch(action.fetchFaculty(limit, curPage));
  }, [dispatch, limit, curPage]);

  useEffect(() => {
    dispatch({
      type: 'RESET_PUBLISH_STATE',
    });
  }, [dispatch]);
  useEffect(() => {
    getFacultyList();
  }, [getFacultyList]);
  useEffect(() => {
    dispatch(fetchReport());
  }, [dispatch]);

  return (
    <div className='container'>
      <h2 className={classes.facultyListTitle}>Site statistics</h2>
      <div className={classes.gridStatisticsContainer}>
        <div className={classes.gridStatistics}>
          <div className={`${classes.box} ${classes.blueBox}`}>
            <span className={classes.statisticsTitle}>
              Percent of student has submitted
            </span>
            <p className={classes.statisticsContent}>
              {report && Math.ceil(report.percentOfStudentHasSubmitted)} %
            </p>
          </div>
          <div className={`${classes.box} ${classes.purpleBox}`}>
            <span className={classes.statisticsTitle}>
              Percent of faculty has submitted
            </span>
            <p className={classes.statisticsContent}>
              {report && Math.ceil(report.percentOfFacultyHasSubmitted)} %
            </p>
          </div>
          <div className={`${classes.box} ${classes.greenBox}`}>
            <span className={classes.statisticsTitle}>
              Largest submission count of single faculty
            </span>
            <p className={classes.statisticsContent}>
              {report && report.largestSubmissionCountOfSingleFaculty}
            </p>
          </div>
          <div className={`${classes.box} ${classes.yellowBox}`}>
            <span className={classes.statisticsTitle}>
              New submissions in 7 days
            </span>
            <p className={classes.statisticsContent}>
              {report && report.newSubmissionsIn7Days}
            </p>
          </div>
        </div>
      </div>

      <h2 className={classes.facultyListTitle}>Faculty list</h2>
      <div className={classes.gridContainer}>
        <div className={classes.grid}>
          {faculties &&
            faculties.map((faculty, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/manager/faculty/contribution/${faculty.id}`}
                  className={classes.facultyBtn}>
                  {faculty.name} ({faculty.contributionCount})
                  {/* <img src={ArrowRight} alt='123' /> */}
                  <i className='fa fa-angle-right'></i>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
}
