import React, { useState } from "react";
import styles from "./navBar.module.scss";
import Link from "next/link";
import Hamburger from "hamburger-react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div
        className={
          isOpen ? `${styles.navLeft} ${styles.opened}` : styles.navLeft
        }
      >
        <Link href="#accueil" onClick={() => setIsOpen(false)}>
          A propos
        </Link>
        <Link href="#formations" onClick={() => setIsOpen(false)}>
          Formations
        </Link>
        <Link href="#experiences" onClick={() => setIsOpen(false)}>
          Expériences
        </Link>
        <Link href="#realisations" onClick={() => setIsOpen(false)}>
          Réalisations
        </Link>
        <Link href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
      <div className={styles.hamburgerReact}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
