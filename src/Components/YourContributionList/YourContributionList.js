/** @format */

import React from 'react';
import YourContributionItems from './YourContributionItems/YourContributionItems';
import classes from './YourContributionList.module.scss';

export default function YourContributionList({ contributionList }) {
  return (
    <div className={classes.gridContainer}>
      <YourContributionItems contribution={contributionList} />
    </div>
  );
}
