import React from 'react'

import classes from './ManagerLanding.module.scss'
import ArrowRight from '../../assets/img/caret-right.png'

export default function ManagerLanding() {
    return (
        <div className={classes.container}>
            <h2 className={classes.facultyListTitle}>
                Faculty list
            </h2>
            <div className={classes.container}>
                <div className={classes.grid}>
                    <button className={classes.facultyBtn}>
                        Information Technology
                    <img src={ArrowRight} alt="123" />
                    </button>
                    <button className={classes.facultyBtn}>
                        Marketing
                    <img src={ArrowRight} alt="123" />
                    </button>
                    <button className={classes.facultyBtn}>
                        Media
                    <img src={ArrowRight} alt="123" />
                    </button>
                    <button className={classes.facultyBtn}>
                        Bussiness
                    <img src={ArrowRight} alt="123" />
                    </button>
                    <button className={classes.facultyBtn}>
                        Art
                    <img src={ArrowRight} alt="123" />
                    </button>

                </div>
            </div>

        </div>
    )
}
