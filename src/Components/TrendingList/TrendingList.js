/** @format */

import React from 'react';

import TrendingItems from './TrendingItems/TrendingItems';
import classes from './TrendingList.module.scss';

export default function TrendingList({ contributionPublishList }) {
  return (
    <div className={classes.gridContainer}>
      <TrendingItems trending={contributionPublishList} />
    </div>
  );
}
