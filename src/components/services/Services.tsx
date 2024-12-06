import React from 'react'
import styles from './Services.module.css'
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"; // Import icons from react-icons
import { caveatFont } from '@/font'

const Services = () => {
  return (
    <div>
       <section id="servicesSec" className={styles.servicesSec}>
        <div className={styles.services}>
          <h4 className={`${styles.topHeadings} ${caveatFont.className}`}>
              <span>w</span>hat{" "}
              <span>I</span>{" "}
              <span>d</span>o{" "}
              <span>f</span>or{" "}
              <span>c</span>lients
          </h4>
          <p className={styles.topPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt laudantium officia fuga ipsam quasi corrupti in numquam
            dolor libero explicabo, inventore aperiam, commodi et!
          </p>


          <div className={styles.servicesCardsParent}>
            
            <div className={styles.servicesCards1}>
              <div className={styles.servicesCardsIcons}>
                <FaBullhorn className={styles.icon} /> {/* Branding Icon */}
              </div>
              <div className={styles.servicesCardsBottom}>
                <h4>branding</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

            <div className={styles.servicesCards2}>
              <div className={styles.servicesCardsIcons}>
                <FaPaintBrush className={styles.icon} /> {/* Design Icon */}
              </div>
              <div className={styles.servicesCardsBottom}>
                <h4>design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

            <div className={styles.servicesCards3}>
              <div className={styles.servicesCardsIcons}>
                <FaCode className={styles.icon}/> {/* Development Icon */}
              </div>
              <div className={styles.servicesCardsBottom}>
                <h4>development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

            <div className={styles.servicesCards4}>
              <div className={styles.servicesCardsIcons}>
                <FaSearch className={styles.icon}/> {/* SEO Icon */}
              </div>
              <div className={styles.servicesCardsBottom}>
                <h4 >SEO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
