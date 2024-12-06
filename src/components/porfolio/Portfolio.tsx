import React from 'react'
import styles from './Porfolio.module.css'
import { caveatFont } from "@/font";
import Card from '../cards/Card';


const Portfolio = () => {
    return (
        <div >
            <section className={styles.portfolio} id='portfolio'>
                <h4 className={`${caveatFont.className} ${styles.topHeading} `}>
                    <span >M</span>y{" "}
                    <span>L</span>ast{" "}
                    <span>W</span>ork
                </h4>
                <p className={styles.topPara}>
                    Here are some of my recent projects showcasing my journey and growth as a front-end developer. Each project reflects my commitment to clean, efficient code and user-centered design, combining both creativity and functionality to create meaningful digital experiences.
                </p>
                <Card/>

            </section>
        </div>
    )
}

export default Portfolio
