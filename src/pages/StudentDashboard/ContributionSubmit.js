import React from 'react'
import Background from '../../Components/Background'
import classes from './ContributionSubmit.module.scss'
import articleImage from '../../assets/img/image-8.png'
export default function ContributionSubmit() {
    return (
        <>
        <Background/>
        <div className={`container  ${classes.submitContainer}`}>
            <h3 className="">Contribution submission</h3>
            <div className={`  ${classes.submitContent}`}>
                <div className="row m-0">
                    <div className={`col-md-12 col-lg-6 col-xl-6 ${classes.formInput}`}>
                        <div className="form-group">
                            <label>Title</label>
                            <input className="form-control"/>
                        </div>
                    </div>
                    <div className={`col-md-12 col-lg-6 col-xl-6 ${classes.formInput}`}>
                        <div className="form-group">
                            <label>Short Description</label>
                            <input className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className={`${classes.thumbnailContainer}`}>
                    <h4>Thumbnails</h4>
                    <button>Upload image</button>
                </div>
                <div className={`${classes.articleImage}`}> 
                    <h4>Article</h4>
                    <img src={articleImage} alt="123"/>
                    <div className="d-block text-center">
                         <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
