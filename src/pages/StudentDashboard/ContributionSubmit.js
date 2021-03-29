import React from 'react'
import Background from '../../Components/Background'
import classes from './ContributionSubmit.module.scss'
// import articleImage from '../../assets/img/image-8.png'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/action/ActionContribution'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';
export default function ContributionSubmit() {
    const contribution = useSelector(state => state.contributionReducer.contribution)
    let { name, description } = contribution.values
    const dispatch = useDispatch()
    let handleChangeInput = (e) => {
        let { value, name } = e.target
        let newValues = { ...contribution.values }
        newValues[name] = value
        if (name === "thumbnail") {
            newValues[name] = e.target.files[0]
        } else if (name === "files") {
            newValues[name] = e.target.files[0]
        }
        dispatch(action.handleInput(newValues))
    }

    let schema = yup.object().shape({
        name: yup.string().required('⚠ Title is required'),
        description: yup.string().required('⚠ Description is required'),
        thumbnail: yup.string().required('⚠ This field allows uploading jpg, jpeg, doc, docx'),
        files: yup.string().required('⚠ This field allows uploading jpg, jpeg'),
    })

    const { register, errors, handleSubmit } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    });

    let onSubmit = (e) => {
        e.preventDefault();
        let formInput = contribution.values;
        dispatch(action.submitContribution(formInput))
    }
    return (
        <>
            <Background />
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
                                    value={name}
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
                                    value={description}
                                    onChange={handleChangeInput}
                                    ref={register}
                                />
                                <p className='err-message'>{errors.description?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.thumbnailContainer}`}>
                        <h4>Thumbnails</h4>
                        <label>
                            <input
                                type="file"
                                className="form-control-file"
                                name="thumbnail"
                                onChange={handleChangeInput}
                                ref={register}
                            />
                            <p className='err-message'>{errors.thumbnail?.message}</p>
                            {/* Upload Image */}
                        </label>

                    </div>
                    <div className={`${classes.articleImage}`}>
                        <h4>Article</h4>
                        {/* <img src={articleImage} alt="123" /> */}
                        <input
                            type="file"
                            className="form-control-file"
                            name="files"
                            onChange={handleChangeInput}
                            ref={register}
                        />
                        <p className='err-message'>{errors.files?.message}</p>
                        <div className="d-block text-center">
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
