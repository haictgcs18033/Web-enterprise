import React from 'react'

import classes from './NewContribution.module.scss'
import contribution from '../../../assets/img/contribution.png'
import eyeIcon from '../../../assets/img/eye-icon.png'


export default function NewContribution() {
    return (
        <div className={`card ${classes.card}`}>
            <img className="card-img-top" src={contribution} alt="123" />
            <div className={classes.overlay}></div>
            <button type="button" className={classes.contributionBtn}>
                <img className={classes.icon} src={eyeIcon} alt="123" />
                    See Contribution
            </button>
            <div className="card-body">
                <h4 className={classes.cardTitle}>This is a contribution</h4>
                <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
            </div>
        </div>
    )
}
