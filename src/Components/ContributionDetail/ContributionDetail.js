/** @format */

import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import classes from './ContributionDetail.module.scss';
import docFile from '../../assets/img/doc-file.png';
import { useParams } from 'react-router-dom';
export default function ContributionDetail() {
    let { id } = useParams();

    let [contribution, setContribution] = useState({});
    useEffect(() => {
        async function fetchData() {
            try {
                let result = await Axios({
                    url: `https://35.224.120.132/contributions/published/${id}`,
                    method: 'GET',
                });
                setContribution(result.data);
            } catch (err) {
                console.log(err.response?.data);
            }
        }
        fetchData();
    }, [id]);
    return (
        <div className={classes.ContributionDetailContainer}>
            <div className={`card ${classes.ContributionDetailCard}`}>
                <div className={classes.tableContainer}>
                    <div className={classes.contributeTable}>
                        <div className={classes.tableCell}>
                            <div className={classes.contributionImg}>
                                <img
                                    className={classes.img}
                                    src={`https://35.224.120.132/${contribution.thumbnail}`}
                                    alt={contribution.name}
                                />
                            </div>
                            <div className={classes.contributionContent}>
                                <p className={classes.title}>{contribution.facultyName}</p>
                                <p className={classes.content}>{contribution.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`card-body ${classes.cardBody}`}>
                    <div
                        data-toggle='modal'
                        data-target='#contributionDetailModal'
                        className={classes.contribution}>
                        <img src={docFile} alt='123' />
                        {contribution.files &&
                            contribution.files.map((contribute, index) => {
                                return <p className={classes.fileName}>{contribute.file}</p>;
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
                                    {contribution.files?.map((contribute, index) => {
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
