import React, { useCallback, useEffect } from 'react'
import uploadIcon from '../../assets/img/upload.png'
import classes from './UploadContribution.module.scss'
import * as action from '../../redux/action/ActionContribution'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClosureDate } from '../../redux/action/ActionForRedux'
import * as actionContribution from '../../redux/action/ActionContribution'
import moment from 'moment'
export default function UploadContribution(props) {
    let { id } = useParams()
    const contributionList=useSelector(state=>state.contributionReducer.contributionList)
    let closureDateAdmin = useSelector(state => state.webEnterpriseReducer.closureDateAdmin)
    const contributionComment = useSelector(state => state.contributionReducer.contributionComment)
    let dispatch = useDispatch()
    const getComment = useCallback(
        () => dispatch(action.getContributionComment(id)),
        [dispatch, id]
    );
    const getContribution = useCallback(
        () => dispatch(actionContribution.getContributionList(1, 99)),
        [dispatch]
      );
      useEffect(() => {
        getContribution();
      }, [getContribution]);
    useEffect(() => {
        getComment()
    }, [getComment])
    useEffect(() => {
        dispatch(fetchClosureDate())
    }, [dispatch,])
    let count = contributionComment.length
 
    let renderStatus=(contributionList)=>{
        if(contributionList?.length===0){
            return 'Not yet'
        }else if(contributionList?.length>0){
            return 'Submitted'
        }else if(contributionList?.map((contribute)=>contribute.isPublished===true)){
            return "Published"
        }
    }
    return (
        <div>

            <div className={classes.container}>
                <div className={classes.gridContainer}>
                    <div className={classes.submitArticleBox}>
                        <div className={`container ${classes.uploadContainer}`}>
                            <h2 className={classes.submitArticle}>
                                Submit article
                                </h2>
                            <table className={classes.table}>
                                <tbody>
                                    <tr>
                                        <th className={classes.tableHeader}>Submission status</th>
                                        <td className={classes.tableData}>
                                            {renderStatus(contributionList)}
                                        </td>
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
                                        <th className={classes.tableHeader}>Submission comments</th>
                                        <td className={classes.tableData}>{count === 0 ? 'Not yet' :
                                         <NavLink to={`/student/comment/${id}`} >{count} comment</NavLink> }</td>
                                       
                                    </tr>
                                </tbody>
                            </table>
                            <NavLink className={classes.btnUpload} to="/student/contribution-submit">
                                <span><img className={classes.uploadIcon} src={uploadIcon} alt="123" /></span>
                                    Upload Contribution
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
