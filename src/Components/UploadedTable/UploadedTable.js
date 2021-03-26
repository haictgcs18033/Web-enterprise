// uploaded-table
import React from 'react'

import classes from './UploadedTable.module.scss'
import penIcon from '../../assets/img/pen2.png'
import binIcon from '../../assets/img/green-bin.png'

export default function UploadedTable() {
    return (
        <div className={`container ${classes.uploadedTableContainer}`}>
            <h2 className={classes.submitArticle}>
                Submit article
            </h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Submission status</th>
                        <td>Not yet</td>
                    </tr>
                    <tr >
                        <th>Closure date</th>
                        <td>cc</td>
                    </tr>
                    <tr>
                        <th>Final closure date</th>
                        <td>cc</td>
                    </tr>
                    <tr>
                        <th>Last modified</th>
                        <td>cc</td>
                    </tr>
                    <tr>
                        <th>Submission comments</th>
                        <td>Not yet</td>
                    </tr>
                </thead>
            </table>
            <div className={`text-center ${classes.flexBtn}`}>
                <button type="button" className={classes.editBtn}>
                    <img src={penIcon} alt="123" className={classes.icon} />
                    Edit Contribution
                </button>
                <button type="button" className={classes.deleteBtn}>
                    <img src={binIcon} alt="123" className={classes.icon} />
                    Delete Article
                </button>
            </div>
        </div>
    )
}
