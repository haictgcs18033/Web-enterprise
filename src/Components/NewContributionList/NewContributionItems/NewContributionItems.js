import React from 'react'

import classes from './NewContributionItems.module.scss'

import eyeIcon from '../../../assets/img/eye-icon.png'
import { NavLink } from 'react-router-dom';


export default function NewContributionItems(props) {
    let { contribution } = props
    console.log(contribution);
    let renderNewContributionItems = () => {
            return contribution?.map((contribute, index) => {
                return <div key={index} className={`card ${classes.card}`}>
                    <img className="card-img-top" src={`https://35.224.120.132/${contribute.thumbnail}`} alt="123" height="216px" />
                    <div className={classes.overlay}></div>
                    <NavLink to={`/contribution-detail/${contribute.id}`} className={classes.contributionBtn}>
                        <img className={classes.icon} src={eyeIcon} alt="123" />
                        See Contribution
                    </NavLink>
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
