/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import * as classes from './ManagerLanding.module.scss';
import downImg from '../../assets/img/down.png';
import arrow from '../../assets/img/arrow.png';
import fileDown from '../../assets/img/fileDown.png';
import close from '../../assets/img/close.png';
import * as actionContribution from '../../redux/action/ActionContribution';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
export default function FacultyContribution() {
  let contributionPublishList = useSelector(
    (state) => state.contributionReducer.contributionPublishList
  );
  let [curPage] = useState(1);
  let [contributionDownload, setContributionDownload] = useState({
    downloadItem: [],
  });
  let [connectApi, setConnectApi] = useState({
    contributionIds: [],
  });
  let limit = 10;
  let dispatch = useDispatch();
  let { idFaculty } = useParams();
  const getContributionPublish = useCallback(
    () =>
      dispatch(
        actionContribution.getContributionPublishList(curPage, limit, idFaculty)
      ),
    [dispatch, curPage, limit, idFaculty]
  );
  useEffect(() => {
    getContributionPublish();
  }, [getContributionPublish]);
  const [rotate, setRotate] = useState(false);
  const animate = () => {
    setRotate(!rotate);
  };
  let removeDownloadItem = (id) => {
    let contributionUpdate = [...contributionDownload.downloadItem];
    contributionUpdate = contributionUpdate.filter((item) => item.id !== id);
    setContributionDownload({
      downloadItem: contributionUpdate,
    });
  };
  const handleAddDownloadItem = (contribution) => {
    const contributionIndex = connectApi.contributionIds.findIndex(
      (contributionId) => contributionId === contribution.id
    );
    if (contributionIndex === -1) {
      setContributionDownload({
        downloadItem: [...contributionDownload.downloadItem, contribution],
      });
      setConnectApi({
        contributionIds: [...connectApi.contributionIds, contribution.id],
      });
    }
  };

  let download = (contribution) => {
    dispatch(actionContribution.handleDownloadContribution(contribution));
  };

  return (
    <div className={`container ${classes.contributionContainer}`}>
      <h3>All contribution</h3>
      <div className={`${classes.contributionList}`}>
        <div className={`row`}>
          {contributionPublishList.map((contribution, index) => {
            return (
              <div
                key={index}
                className='col-xs-12 col-md-6 col-lg-6 col-xl-4 my-3'>
                <div
                  className={`card text-left px-0 ${classes.cardContribution}`}>
                  <img
                    className='card-img-top'
                    src={`https://35.224.120.132/${contribution.thumbnail}`}
                    alt='123'
                    height='216px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>{contribution.name}</h4>
                    <p className='card-text'>{contribution.description}</p>
                  </div>
                  <div className={`${classes.cardOverlay}`}></div>
                  <button
                    className={`${classes.cardDownloadButton}`}
                    onClick={() => handleAddDownloadItem(contribution)}>
                    <img src={downImg} alt='123' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`d-block text-center my-4 ${classes.showmore}`}>
          <button>SHOW MORE</button>
        </div>
        <div
          className={`${
            contributionDownload.downloadItem.length !== 0
              ? `${classes.selectedItem}`
              : `${classes.selectedItemHide}`
          }`}>
          <p>{contributionDownload.downloadItem.length} items</p>
          <div className={`${classes.groupButton}`}>
            <button
              className={`${classes.fileDown}`}
              onClick={() => download(connectApi)}>
              <img src={fileDown} alt={123} />
            </button>
            <button
              className={`${classes.arrow} ${
                rotate ? `${classes.rotate}` : null
              }`}
              onClick={animate}>
              <img src={arrow} alt={123} />
            </button>
          </div>
          <div
            className={`${
              rotate
                ? `${classes.dropdownContainer}`
                : `${classes.dropdownContainerHide}`
            }`}>
            <h4>Drowdown Items</h4>
            <div className={`${classes.dropdownItemContainer}`}>
              {contributionDownload.downloadItem.map((downloadItem, index) => {
                return (
                  <div key={index} className={`${classes.dropDownItem}`}>
                    <div className={`${classes.dropdownContent}`}>
                      <h5>{downloadItem.name}</h5>
                      <p>{downloadItem.description}</p>
                    </div>
                    <button
                      className={`${classes.close}`}
                      onClick={() => {
                        removeDownloadItem(downloadItem.id);
                      }}>
                      <img src={close} alt='123' />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
