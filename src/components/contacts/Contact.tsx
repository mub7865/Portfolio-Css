import React from 'react'
import styles from './Contact.module.css'
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';
import { caveatFont } from '@/font'


const Contact = () => {
  return (
    <div>
       <section id="contact" className={styles.contactParent} >
        <div className={styles.contact}>
          <h4 className={`${caveatFont.className} ${styles.topHeading}`}>
              <span className="text-[#5170ab] ">C</span>ontact{' '}
              <span className="text-[#5170ab] ">M</span>e
          </h4>
          <p className={styles.topPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt laudantium officia fuga ipsam quasi corrupti in numquam
            dolor libero explicabo, inventore aperiam.
          </p>

          <div className={styles.contInfoParent}>
            
            {/* Contact Information */}
            <div className={styles.contInfo}>
              
              <div className={styles.infoParent}>
                <MdEmail className={styles.icon}/>
                <div className={styles.info}>
                  <p>Have a question?</p>
                  <p className={styles.p2} >I am here to help you</p>
                  <p className={styles.p3}>Email me at thomas.david@mail.com</p>
                </div>
              </div>

              <div className={styles.infoParent}>
                <MdLocationOn className={styles.icon} />
                <div className={styles.info}>
                  <p >Current Location</p>
                  <p className={styles.p2}>Mansoura, Egypt</p>
                  <p className={styles.p3}>serving clients worldwide</p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <form className={styles.form}>
              <div className={styles.formChild}>
                <input
                  className={styles.inp1}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                />
                <input
                  className={styles.inp1}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>

              <div className="w-full">
                <input
                  className={styles.inp2}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  autoComplete="off"
                />
                <textarea
                  id="msg"
                  className={styles.txtAr}
                  placeholder="Your message"
                  autoComplete="off"
                />
              </div>

              <Link href="#home" className={styles.conBtn}>
                Send message
              </Link>
            </form>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
