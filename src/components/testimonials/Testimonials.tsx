import React from 'react'
import styles from './Testimonials.module.css'
import Image from 'next/image'
import { caveatFont } from '@/font'

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonialsChild}>
        <h4 className={`${caveatFont.className} ${styles.topHeading}`}>
            <span>W</span>hat{' '}
            <span>O</span>ther{' '}
            <span>P</span>eople{' '}
            <span>S</span>ay
        </h4>


        <div className={styles.cardsParent}>
            {[
              { src: '/profile.png', alt: 'easton kai', title: 'easton kai', role: 'javascript developer' },
              { src: '/profile.png', alt: 'elijah liam', title: 'elijah liam', role: 'android developer' },
              { src: '/profile.png', alt: 'james owen', title: 'james owen', role: 'IOS developer' },
             
            ].map((person, index) => (
              <div
                key={index}
                className={styles.cards}
              >
                <div className={styles.cardImgDiv}>
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={128}
                    height={128}
                    className={styles.img}
                  />
                </div>
                <p className={styles.p1}>{person.title}</p>
                <p className={styles.p2}>{person.role}</p>
                <p className={styles.p3}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonials
