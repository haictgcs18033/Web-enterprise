import React from 'react'

import classes from './ContributionDetail.module.scss'
import laptopImg from '../../assets/img/lap-top.png'
import docFile from '../../assets/img/doc-file.png'

export default function ContributionDetail() {
    return (
        <div className={classes.ContributionDetailContainer}>
            <div className={`card ${classes.ContributionDetailCard}`}>
                <div className={classes.tableContainer}>
                    <table className={classes.contributeTable}>
                        <tr className={classes.tableCell}>
                            <td className={classes.contributionImg}>
                                <img src={laptopImg} alt="123" />
                            </td>
                            <td className={classes.contributionContent}>
                                <p className={classes.title}>This is a contribution</p>
                                <p className={classes.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className={`card-body ${classes.cardBody}`}>
                    <div className="d-flex align-items-center">
                        <img src={docFile} alt="123" />
                        <p className={classes.fileName}>ContributionFile.docx</p>
                    </div>
                    {/* <iframe src={`https://docs.google.com/gview?url=http://remote.url.tld/path/to/document.doc&embedded=true`}></iframe> */}
                </div>
            </div>
        </div>


    )
}
