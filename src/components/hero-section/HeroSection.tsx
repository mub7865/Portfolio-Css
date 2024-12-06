'use client'
import React from 'react'
import styles from './HeroSection.module.css'
import Button from '../button/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'





function HeroSection() {
    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.heading}>Hey! <span>I</span>&apos;m Muhammad Ubaid Raza <br />
<span>I</span>&apos;m {" "}
                <Typewriter 
                words={['Front End Web Developer', 'Ux Ui Designer']}
                loop={Infinity}
                cursor={true}	
                cursorStyle={"_"}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                />
                

                </h1>

                <p>I can build user interface for web sites and applications with React JS and Next.Js <br />
                I love the front end development.</p>

                <Button text={'Here Me'}/>


                <div className={styles.social_icons}>
                <FaFacebookF size={30} color='black'  />
                <FaXTwitter size={30} color='black'/>
                <FaInstagram size={30} color='black'/>
                <FaWhatsapp size={30} color='black'/>
                <FaTelegramPlane size={30} color='black'/>
                </div>

                <div className={styles.image_sec}>
            <Image src={"/behance.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/dribble.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/upwork.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/freelance.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
       
                </div>
            </section>
        </>
    )
}

export default HeroSection