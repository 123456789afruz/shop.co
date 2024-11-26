import React from 'react'
import s from './By.module.scss'
import SectionTitle from '../Header/SectionTitle/SectionTitle'


const By = ({ title }) => {
    return (
        <>
            <section className={s.by}>
                <div className="container">
                    <div className={s.wrapper}>
                        <SectionTitle orient='center'>{title}</SectionTitle>
                        <div className={s.grid}>
                            <h3>Casual</h3>
                            <h3>Formal</h3>
                        </div>
                        <div className={s.grid1}>
                            <h3>Party</h3>
                            <h3>Gym</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default By
