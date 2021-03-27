import React from 'react'

import classes from './YourContributionItems.module.scss'

import eyeIcon from '../../../assets/img/eye-icon.png'
import penIcon from '../../../assets/img/pen.png'
import binIcon from '../../../assets/img/bin.png';
import { useDispatch } from 'react-redux';
import * as action from '../../../redux/action/ActionContribution'
export default function YourContributionItems(props) {
    let { contribution } = props
    const dispatch = useDispatch()
    console.log(contribution);
    let renderContributionItem = () => {
        return contribution.map((contribution, index) => {
            return <div key={index} className={`card ${classes.card}`}>
                <img className="card-img-top" src={`https://35.224.120.132/${contribution.thumbnail}`} alt="123" height="216px"/>
                <div className={classes.overlay}></div>

                <button type="button" className={`${classes.btn} ${classes.seeBtn}`}>
                    <img className={classes.icon} src={eyeIcon} alt="123" />
                            See Contribution
                        </button>
                <button type="button" className={`${classes.btn} ${classes.editBtn}`}>
                    <img className={classes.icon} src={penIcon} alt="123" />
                            Edit Contribution
                        </button>
                <button type="button" className={`${classes.btn} ${classes.deleteBtn}`} 
                onClick={()=>{deleteContribution(contribution.id)}}>
                    <img className={classes.icon} src={binIcon} alt="123" />
                            Delete Article
                        </button>

                <div className="card-body">
                    <h4 className={classes.cardTile}>{contribution.name}</h4>
                    <p className={classes.cardText}>{contribution.description}</p>
                </div>
            </div>
        })
    }
    let deleteContribution=(id)=>{
         dispatch(action.handleDeleteContribution(id))
    }
    return (
        <div className={classes.grid}>
            {renderContributionItem()}
        </div>
    )
}
