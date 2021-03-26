import React from 'react'

import classes from './NewContributionItems.module.scss'

import eyeIcon from '../../../assets/img/eye-icon.png'


export default function NewContributionItems(props) {
    let { contribution } = props
    console.log(contribution);
    let renderNewContributionItems = () => {
        return contribution.map((contribute, index) => {
            return <div className={`card ${classes.card}`}>
                <img className="card-img-top" src={`https://34.68.194.194:3000/${contribute.thumbnail}`} alt="123" height="216px" />
                <div className={classes.overlay}></div>
                <button type="button" className={classes.contributionBtn}>
                    <img className={classes.icon} src={eyeIcon} alt="123" />
                    See Contribution
                </button>
                <div className="card-body">
                    <h4 className={classes.cardTitle}>{contribute.name}</h4>
                    <p className={classes.cardText}>{contribute.description}</p>
                </div>
            </div>
        })
    }
    return (
        <div className={classes.grid}>
            {renderNewContributionItems()}
        </div>
    )
}
