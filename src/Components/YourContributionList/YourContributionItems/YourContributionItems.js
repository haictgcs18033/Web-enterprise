import React from 'react'

import classes from './YourContributionItems.module.scss'
import contributionImg from '../../../assets/img/contributionImg.jpg'
import eyeIcon from '../../../assets/img/eye-icon.png'
import penIcon from '../../../assets/img/pen.png'
import binIcon from '../../../assets/img/bin.png';

export default function YourContributionItems() {
    return (
        <div>
            <div className={`card ${classes.card}`}>
                <img className="card-img-top" src={contributionImg} alt="123" />
                <div className={classes.overlay}></div>

                <button type="button" className={`${classes.btn} ${classes.seeBtn}`}>
                    <img className={classes.icon} src={eyeIcon} alt="123" />
                                See Contribution
                            </button>
                <button type="button" className={`${classes.btn} ${classes.editBtn}`}>
                    <img className={classes.icon} src={penIcon} alt="123" />
                                Edit Contribution
                            </button>
                <button type="button" className={`${classes.btn} ${classes.deleteBtn}`}>
                    <img className={classes.icon} src={binIcon} alt="123" />
                                Delete Article
                            </button>

                <div className="card-body">
                    <h4 className={classes.cardTile}>This is a contribution</h4>
                    <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                </div>
            </div>
        </div>
    )
}
