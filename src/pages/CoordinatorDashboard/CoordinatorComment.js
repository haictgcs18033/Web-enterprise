import React, { useCallback, useEffect, useState } from 'react'
import classes from './Coordinator.module.scss'
import sendIcon from '../../assets/img/send.png'
import userChat from '../../assets/img/UserChat.png'
import { useParams } from 'react-router'
import * as action from '../../redux/action/ActionContribution'
import { useDispatch, useSelector } from 'react-redux'

export default function CoordinatorComment() {
     let {idContribution}= useParams();
     const [interact, setInteract] = useState({
         comment:''
     })
     const  contributionComment = useSelector(state => state.contributionReducer.contributionComment)
     console.log(contributionComment);
     let dispatch=useDispatch()
     const getContributionById = useCallback(
        () => dispatch(action.getContributionById(idContribution)),
        [dispatch,idContribution]
    );
     useEffect( () => {
          getContributionById()
     }, [getContributionById])
    
     let handleChange=(e)=>{
         setInteract({comment:e.target.value})
     }
     let sendComment=()=>{
        dispatch(action.handleSendComment(idContribution,interact))
     }
    return (
        <div className={`container ${classes.commentContainer}`}>
             <div className={`${classes.boxComment}`}>  
                 <label>Comment</label>
                 <textarea className={`form-control`} rows="10" value={interact.comment} onChange={handleChange}/>
                 <button onClick={()=>sendComment()}><img src={sendIcon} alt="123"/></button>
             </div>
             <div className={`${classes.boxMessage}`}>
                 {contributionComment?.map((comment,index)=>{
                     return  <div key={index} className={` mb-4 ${classes.mySelf}`}>
                     <img src={userChat} alt="123"/>
                     <div className={`${classes.commentContent}`}>
                         <h5>You</h5>
                         <p>{comment.comment}</p>
                     </div>
                 </div>
                 })}
                
                 <div className={`${classes.another}`}>
                     <div className={`${classes.commentContent}`}>
                         <h5 className="text-right">Other Name</h5>
                         <p>This isvtopix</p>
                     </div>
                     <div className={`${classes.commentContent}`}>
                     <img src={userChat} alt="123"/>
                     </div>
                 </div>
             </div>
        </div>
    )
}
