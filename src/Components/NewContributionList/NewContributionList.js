/** @format */
import React  from 'react';

import NewContributionItems from './NewContributionItems/NewContributionItems';
import classes from './NewContributionList.module.scss';


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
