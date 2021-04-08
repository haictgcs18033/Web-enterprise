import React, { useCallback, useEffect, useState } from 'react'
import classes from './Coordinator.module.scss'
import sendIcon from '../../assets/img/send.png'
import userChat from '../../assets/img/UserChat.png'
import { useParams } from 'react-router'
import * as action from '../../redux/action/ActionContribution'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';

export default function CoordinatorComment() {
    let { idContribution } = useParams();
    const [interact, setInteract] = useState({
        comment: ''
    })
    const contributionComment = useSelector(state => state.contributionReducer.contributionComment)
    let dispatch = useDispatch()
    const getComment = useCallback(
        () => dispatch(action.getContributionComment(idContribution)),
        [dispatch, idContribution]
    );
    useEffect(() => {
        getComment()
    }, [getComment])

    let handleChange = (e) => {
        setInteract({ comment: e.target.value })
    }
    let sendComment = () => {
        dispatch(action.handleSendComment(idContribution, interact))
    }
    let schema = yup.object().shape({
        comment: yup.string()
            .max(255, '⚠ Comment must not exceed 255 characters')
    })
    const { register, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    return (
        <div className={`container ${classes.commentContainer}`}>

            <div className={`${classes.boxComment}`}>
                <form >
                    <label>Comment</label>
                    <textarea
                        className={`form-control`}
                        rows="10"
                        name="comment"
                        value={interact.comment}
                        onChange={handleChange}
                        ref={register}
                    />
                    <p className='err-message'>{errors.comment?.message}</p>
                    <button onClick={async () => { await sendComment(); setInteract({ comment: '' }) }}><img src={sendIcon} alt="123" /></button>
                </form>
            </div>
            <div className={`${classes.boxMessage}`}>
                {contributionComment?.map((comment, index) => {
                    return <div key={index} className={` mb-4 ${classes.mySelf}`}>
                        <img src={userChat} alt="123" />
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
