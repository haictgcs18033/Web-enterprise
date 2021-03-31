import React, { useEffect } from 'react'

import uploadIcon from '../../assets/img/upload.png'
import classes from './UploadContribution.module.scss'
import Background from '../../Components/Background'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClosureDate } from '../../redux/action/ActionForRedux'
import moment from 'moment'
export default function UploadContribution(props) {
    let { id } = useParams()
    console.log(id);
    let closureDateAdmin = useSelector(state => state.webEnterpriseReducer.closureDateAdmin)
    console.log(closureDateAdmin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchClosureDate())
    }, [dispatch])
    return (
        <div>
            <Background />
            <div className={`container ${classes.uploadContainer}`}>
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
                            <td className={classes.tableData}>
                                {moment(closureDateAdmin.firstClosureDate).format('L')}-{moment(closureDateAdmin.firstClosureDate).format('LT')}
                            </td>
                        </tr>
                        <tr>
                            <th className={classes.tableHeader}>Final closure date</th>
                            <td className={classes.tableData}>
                                {moment(closureDateAdmin.secondClosureDate).format('L')}-{moment(closureDateAdmin.secondClosureDate).format('LT')}
                            </td>
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
                <NavLink className={classes.btnUpload} to="/student/contribution-submit">
                    <span><img className={classes.uploadIcon} src={uploadIcon} alt="123" /></span>
                            Upload Contribution
                    </NavLink>
            </div>
        </div>
    )
}
