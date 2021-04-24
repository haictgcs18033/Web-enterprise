/** @format */

import React, { useCallback, useEffect } from 'react';


import classes from './ContributionDetail.module.scss';
import docFile from '../../assets/img/doc-file.png';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handlePublishById } from '../../redux/action/ActionContribution';
export default function ContributionDetail(props) {
    let { id } = useParams();

    const contributionPublish = useSelector(state => state.contributionReducer.contributionPublish)
 
    const dispatch = useDispatch()
    let getContributionDetail = useCallback(
        () => dispatch(handlePublishById(id)),
        [dispatch, id],
    )
    useEffect(() => {
        getContributionDetail()
    }, [getContributionDetail])
  
    
    return (
        <div className={classes.ContributionDetailContainer}>
            <div className={`card ${classes.ContributionDetailCard}`}>
                <div className={classes.tableContainer}>
                    <div className={classes.contributeTable}>
                        <div className={classes.tableCell}>
                            <div className={classes.contributionImg}>
                                <img
                                    className={classes.img}
                                    src={`https://35.224.120.132/${contributionPublish.thumbnail}`}
                                    alt={contributionPublish.name}
                                />
                            </div>
                            <div className={classes.contributionContent}>
                                <p className={classes.title}>{contributionPublish.name}</p>
                                <p className={classes.content}>{contributionPublish.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`card-body ${classes.cardBody}`}>
                    <div
                        data-toggle='modal'
                        data-target='#contributionDetailModal'
                        className={classes.contribution}
                       >
                        <img src={docFile} alt='123' />
                        {contributionPublish.files &&
                            contributionPublish.files.map((contribute, index) => {
                                return <p key={index} className={classes.fileName}>{contribute.file}</p>;
                            })}
                    </div>
                    
                    <div
                        className='modal fade'
                        id='contributionDetailModal'
                        tabindex='-1'
                        role='dialog'
                        aria-labelledby='exampleModalLongTitle'
                        aria-hidden='true'>
                        <div className={`modal-dialog ${classes.modalDialog}`} role='document'>
                            <div className={`modal-content ${classes.modalContent}`}>
                                <div className='modal-header'>
                                    <button
                                        type='button'
                                        className='close'
                                        data-dismiss='modal'
                                        aria-label='Close'>
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div className={`modal-body ${classes.modalBody}`}>

                                    {
                                        contributionPublish.files &&
                                        contributionPublish.files.map((contribute, index) => {
                                            return (
                                                <iframe
                                                    title='file word'
                                                    key={index}
                                                    src={`https://docs.google.com/gview?url=https://35.224.120.132/${contribute.file}&embedded=true`}></iframe>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
