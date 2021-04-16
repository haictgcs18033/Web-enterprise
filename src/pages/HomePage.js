/** @format */

import React, { useCallback, useEffect, useState } from 'react';

import Background from '../Components/Background';
import notifyIcon from '../assets/img/notifyIcon.png';
import trendingIcon from '../assets/img/trending-icon.png';
import NewContributionList from '../Components/NewContributionList/NewContributionList';
import TrendingList from '../Components/TrendingList/TrendingList';
import * as action from '../redux/action/ActionContribution';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage(props) {
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
        dispatch({
            type: 'RESET_PUBLISH_STATE',
        });
    }, [dispatch]);

    useEffect(() => {
        getContributionPublish();
    }, [getContributionPublish, curPage, limit]);

    const nextPage = () => {
        setCurPage(curPage + 1);
    };
    return (
        <div>
            <Background></Background>
            <div className='container'>
                <h2 className='trend-title'>
                    <span>
                        <img className='trend-icon' src={trendingIcon} alt='123' />
                    </span>
                    Now Trending
                </h2>
                <TrendingList contributionPublishList={contributionPublishList} />
            </div>
            <div className='container'>
                <h2 className='contribution-title'>
                    <span>
                        <img className='notify-icon' src={notifyIcon} alt='123' />
                    </span>
                    New Contributions
                </h2>
                <NewContributionList
                    contributionPublishList={contributionPublishList}
                    total={totalContribution}
                    nextPage={nextPage}
                />
            </div>
        </div>
    );
}
