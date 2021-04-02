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
     let dispatch=useDispatch()
     const getComment = useCallback(
        () => dispatch(action.getContributionComment(idContribution)),
        [dispatch,idContribution]
    );
     useEffect( () => {
        getComment()
     }, [getComment])
    
     let handleChange=(e)=>{
         setInteract({comment:e.target.value})
     }
     let sendComment=()=>{
         console.log(interact);
        dispatch(action.handleSendComment(idContribution,interact))
     }
     console.log(contributionComment);

    return (
        <div className={`container ${classes.commentContainer}`}>
            
             <div className={`${classes.boxComment}`}>  
                 <label>Comment</label>
                 <textarea className={`form-control`} rows="10" value={interact.comment} onChange={handleChange}/>
                 <button onClick={async()=>{await sendComment();setInteract({comment:''})}}><img src={sendIcon} alt="123"/></button>
             </div>
             <div className={`${classes.boxMessage}`}> 
                 {contributionComment?.map((comment,index)=>{
                     console.log(comment);
                     return  <div key={index} className={` mb-4 ${classes.mySelf}`}>
                     <img src={userChat} alt="123"/>
                     <div className={`${classes.commentContent}`}>     
                         <h5>{comment.authorName}</h5>
                         <p>{comment.comment}</p>
                     </div>
                 </div>
                 })}
             </div>
        </div>
    )
}
