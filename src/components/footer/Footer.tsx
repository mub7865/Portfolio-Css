import React from 'react'
import styles from './Footer.module.css'
import {caveatFont} from '@/font'

const Footer = () => {
  return (
    <div>
            <footer className={`${caveatFont.className} ${styles.footer}`}>© 2024 Ubaid Raza. All rights reserved.</footer>
    </div>
  )
}

export default Footer
