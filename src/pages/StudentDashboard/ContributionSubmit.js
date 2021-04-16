import React, { useState } from 'react'

import classes from './ContributionSubmit.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/action/ActionContribution'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
export default function ContributionSubmit() {
    const contribution = useSelector(state => state.contributionReducer.contribution)
    let [term, setTerm] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    let handleChangeInput = (e) => {
        let { value, name } = e.target
        let newValues = { ...contribution?.values }
        newValues[name] = value
        if (name === "thumbnail") {
            newValues[name] = e.target.files[0]
        } else if (name === "files") {
            newValues[name] = e.target.files[0]
        }
        dispatch(action.handleInput(newValues))
    }
    let handleChangeTerm = () => {
        setTerm(!term)
    }
    let schema = yup.object().shape({
        name: yup.string()
            .strict(true)
            .trim('⚠ This field must not contain whitespace at the beginning and end')
            .required('⚠ Title is required')
            .max(255, '⚠ Title must not exceed 255 characters')
            .matches(/^[a-zA-Z ]*$/, '⚠ Title must not contain numbers or special characters'),
        description: yup.string()
            .strict(true)
            .trim('⚠ This field must not contain whitespace at the beginning and end')
            .required('⚠ Description is required')
            .max(255, '⚠ Description must not exceed 255 characters'),
    })

    const { register, handleSubmit, errors, formState } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    let onSubmit = () => {
        // e.preventDefault();
        let formInput = contribution.values;
        if (term) {
            dispatch(action.submitContribution(formInput, history));
        } else if (term === false) {
            alert('You need to agree term and privacy')
        }
    }
    return (
        <>
            <div className={`container  ${classes.submitContainer}`}>
                <h3 className="">Contribution submission</h3>
                <form className={`  ${classes.submitContent}`} onSubmit={handleSubmit(onSubmit)}>
                    <div className="row m-0">
                        <div className={`col-md-12 col-lg-6 col-xl-6 ${classes.formInput}`}>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    className="form-control"
                                    name="name"
                                    defaultValue={contribution?.values.name}
                                    onChange={handleChangeInput}
                                    ref={register}
                                />
                                <p className='err-message'>{errors.name?.message}</p>
                            </div>
                        </div>
                        <div className={`col-md-12 col-lg-6 col-xl-6 ${classes.formInput}`}>
                            <div className="form-group">
                                <label>Short Description</label>
                                <input
                                    className="form-control"
                                    name="description"
                                    defaultValue={contribution?.values.description}
                                    onChange={handleChangeInput}
                                    ref={register}
                                />
                                <p className='err-message'>{errors.description?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.thumbnailContainer}`}>
                        <h4 className={classes.thumbnailTitle}>Thumbnails</h4>
                        <label>
                            <input
                                type="file"
                                className="form-control-file"
                                accept=".jpg"
                                name="thumbnail"
                                onChange={handleChangeInput}
                            />
                        </label>

                    </div>
                    <div className={`${classes.articleImage}`}>
                        <h4 className={classes.articleTitle}>Article</h4>
                        <input
                            type="file"
                            className="form-control-file"
                           
                            name="files"
                            onChange={handleChangeInput}
                            ref={register}
                        />
                    </div>
                    <div>
                        <h4>Term and privacy</h4>
                        <input type="checkbox" value={term} onChange={handleChangeTerm} />
                        <label htmlFor="vehicle1">
                            <span>&nbsp;I agree to</span>
                            <span>&nbsp;
                                <NavLink to="/student/term-privacy">
                                    term and privacy
                                </NavLink>
                            </span>
                        </label><br />
                    </div>
                    <div className="d-block text-center">
                        <button
                            className={classes.submitBtn}
                            disabled={!formState.isDirty || (formState.isDirty && !formState.isValid)}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
