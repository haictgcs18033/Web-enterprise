import React from 'react'
import classes from './Coordinator.module.scss'
import sendIcon from '../../assets/img/send.png'
export default function CoordinatorComment(props) {
    const id = props.match.params.id
    console.log(id);

    return (
        <div className={`container ${classes.commentContainer}`}>
             <div className={`${classes.boxComment}`}>  
                 <label>Comment</label>
                 <textarea className={`form-control`} rows="10" />
                 <button><img src={sendIcon} alt="123"/></button>
             </div>
             <div className={`${classes.boxMessage}`}>
               Hello Message
             </div>
        </div>
    )
}
