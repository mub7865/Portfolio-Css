'use client'
import React, { useState } from 'react'
import  styles from './Header.module.css'
import { interFont } from '@/font'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '@/app/assests/logo.png'


function Header() {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <>
        <header className={styles.header}>
           <nav className={styles.nav}>
           <Image src={Logo} alt='My Logo' width={95} height={95} className={styles.logo} />   
                    <AnimatePresence>
              {isOpen ? (
            <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.activNavUl}`}
             key={"active"}
             initial={{opacity:0, width:0}}
             animate={{opacity:1, width:"40%"}}
             transition={{duration: 2,type:"spring"}}
             exit={{opacity:0, width:0}}
            >
                 <IoClose size={50} className={styles.close} onClick={()=>{setIsOpen(false)}}/>
                 <li><Link href={"/"}>Home</Link></li> 
                 <li><Link href={"#about"}>About</Link></li> 
                 <li><Link href={"#portfolio"}>Portfolio</Link></li> 
                 <li><Link href={"#servicesSec"}>Services</Link></li> 
                 <li><Link href={"#testimonials"}>Testimonials</Link></li> 
                 <li><Link href={"#contact"}>Contacts</Link></li> 
                 </motion.ul>
              ) : (
                <ul className={`${interFont.className} ${styles.navUl}`}>
                 <li><Link  href={"/"}>Home</Link></li> 
                 <li><Link href={"#about"}>About</Link></li> 
                 <li><Link href={"#portfolio"}>Portfolio</Link></li> 
                 <li><Link href={"#servicesSec"}>Services</Link></li> 
                 <li><Link href={"#testimonials"}>Testimonials</Link></li> 
                 <li><Link href={"#contact"}>Contacts</Link></li> 
              </ul>
              ) }
               </AnimatePresence>

            <TiThMenu size={35} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>
           </nav>
        </header>

    </>
  )
}

export default Header