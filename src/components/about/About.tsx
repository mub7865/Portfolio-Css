'use client'
import React from 'react'
import styles from './About.module.css'
import Button from '../button/Button'
import { interFont } from '@/font'
import Image from 'next/image'
import Profile from '@/app/assests/profile.png'
import { motion,  } from "framer-motion"


// parent
const containerVarient = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }

}

// child

const ItemVarient = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}


function About() {

  return (
    <section>
      <div className={styles.about} id='about'>
        <motion.div className={styles.aboutContent}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >

          <div className={styles.aboutText}>
            <p className={styles.aboutTexth1}>Muhammad Ubaid Raza</p>
            <p className={styles.aboutTexth2}>Freelance Web Developer</p>
            <p className={`${styles.aboutTextP} ${interFont.className}`}>
              Hi! <span>I</span>&apos;m a passionate front-end developer with a strong foundation in HTML, CSS, TypeScript, and frameworks like Next.js and Node.js. I enjoy creating responsive, user-friendly websites that offer seamless user experiences. With a keen eye for design and detail, I bring concepts to life, ensuring that each project meets the latest web standards and best practices.<span>I</span>&apos;m always eager to learn new technologies and improve my skills to build even better web experiences.
            </p>
            <Button text={'Contact Me'} />

          </div>
        </motion.div>


        <motion.div className={styles.aboutImg}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Image src={Profile} alt={'profile'} width={350} height={350} className={styles.mobImg} />

        </motion.div>

      </div>
      <motion.div className={styles.image_sec}
        variants={containerVarient}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/html.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/css.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/typescript.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/git.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/figma.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/react.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/node.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>
        <motion.div
          variants={ItemVarient}
          initial="hidden"
          whileInView="show"
        ><Image src={"/next.png"} alt='picture' width={96} height={96} className='cursor-pointer'></Image></motion.div>

      </motion.div>
    </section>
  )
}

export default About