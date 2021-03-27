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
                        <th className={classes.tableHeader}>Submission status</th>
                        <td className={classes.tableData}>Not yet</td>
                    </tr>
                    <tr >
                        <th className={classes.tableHeader}>Closure date</th>
                        <td className={classes.tableData}>cc</td>
                    </tr>
                    <tr>
                        <th className={classes.tableHeader}>Final closure date</th>
                        <td className={classes.tableData}>cc</td>
                    </tr>
                    <tr>
                        <th className={classes.tableHeader}>Last modified</th>
                        <td className={classes.tableData}>cc</td>
                    </tr>
                    <tr>
                        <th className={classes.tableHeader}>Submission comments</th>
                        <td className={classes.tableData}>Not yet</td>
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
