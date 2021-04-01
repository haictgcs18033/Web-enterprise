import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import classes from './ContributionDetail.module.scss'

import docFile from '../../assets/img/doc-file.png'
import { useParams } from 'react-router-dom'
export default function ContributionDetail() {
    let { id } = useParams()
    console.log(id);
    let [contribution, setContribution] = useState({})
    useEffect(() => {
        async function fetchData() {
            try {
                let result = await Axios({
                    url: `https://greenplus-dev.herokuapp.com/contributions/published/${id}`,
                    method: 'GET'
                })
                setContribution(result.data)
            } catch (err) {
                console.log(err.response?.data);
            }
        }
        fetchData()
    }, [id])
    console.log(contribution);
    return (
        <div className={classes.ContributionDetailContainer}>
            <div className={`card ${classes.ContributionDetailCard}`}>
                <div className={classes.tableContainer}>
                    <table className={classes.contributeTable}>
                        <tr className={classes.tableCell}>
                            <td className={classes.contributionImg}>
                                <img src={`https://35.224.120.132/${contribution.thumbnail}`} width="124px" height="124px" alt="123" />
                            </td>
                            <td className={classes.contributionContent}>
                                <p className={classes.title}>{contribution.facultyName}</p>
                                <p className={classes.content}>{contribution.description}</p>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className={`card-body ${classes.cardBody}`}>
                    <div className="d-flex align-items-center">
                        <img src={docFile} alt="123" />
                        {
                            contribution.files?.map((contribute, index) => {
                                return <p className={classes.fileName}>{contribute.file}</p>
                            })
                        }

                    </div>
                    {
                        contribution.files?.map((contribute, index) => {
                            return <iframe title="file word" key={index} src={`https://docs.google.com/gview?url=https://35.224.120.132/${contribute.file}&embedded=true`}></iframe>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
