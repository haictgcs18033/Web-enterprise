import React, { useState } from 'react'

import classes from './ContributionSubmit.module.scss'
// import articleImage from '../../assets/img/image-8.png'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/action/ActionContribution'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
export default function ContributionSubmit() {
    const contribution = useSelector(state => state.contributionReducer.contribution)
    let [term, setTerm] = useState(false)
    const history=useHistory()
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
            .required('⚠ Title is required'),
        description: yup.string()
            .required('⚠ Description is required'),
        // thumbnail: yup.mixed().test("thumbnail", "⚠ This field allows uploading jpg, jpeg", (value) => {
        // if(value[0]){
        //     return value && value[0].type === "image/jpeg";
        // }

        // }),
        // thumbnail: yup.string().required('⚠ This field allows uploading jpg, jpeg'),
        // files: yup.string().matches(/^[A-Za-z]{9,}\.(?:doc)$/, '⚠ This field allows uploading jpg, jpeg, doc, docx'),
        // .matches(, '⚠ This field allows uploading jpg, jpeg, doc, docx'),
    })

    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    let onSubmit = () => {
        // e.preventDefault();
        let formInput = contribution.values;
        if (term) {
            dispatch(action.submitContribution(formInput,history));
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
                                name="thumbnail"
                                onChange={handleChangeInput}
                                ref={register}
                            />
                            {/* <p className='err-message'>{errors.thumbnail?.message}</p> */}
                            {/* Upload Image */}
                        </label>

                    </div>
                    <div className={`${classes.articleImage}`}>
                        <h4 className={classes.articleTitle}>Article</h4>
                        {/* <img src={articleImage} alt="123" /> */}
                        <input
                            type="file"
                            className="form-control-file"
                            name="files"
                            onChange={handleChangeInput}
                            ref={register}
                        />
                        {/* <p className='err-message'>{errors.files?.message}</p> */}

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
                        <button className={classes.submitBtn}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
