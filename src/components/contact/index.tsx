import React from "react";
import styles from "./contact.module.scss";

//SVG
import TelIcon from "./assets/tel.svg";
import LaptopIcon from "./assets/laptop.svg";
const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <h2>N'hésitez pas! Contactez-moi 😃</h2>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.mail}>
            <span>
              <LaptopIcon />
            </span>
            <a href="mailto:theresebazin2016@gmail.com">
              theresebazin2016@gmail.com
            </a>
          </div>
          <div className={styles.tel}>
            <span>
              <TelIcon />
            </span>
            <a href="tel:0698271774">06 98 27 17 74</a>
          </div>
          <div className={styles.address}>
            <span> 🇫🇷</span>
            ANNECY
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p> Thérèse BAZIN ©2024 </p>
        <p> Tous droits réservés</p>
      </div>
    </div>
  );
};

export default Contact;
