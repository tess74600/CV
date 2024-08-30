"use client";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Picture from "./profilePicture.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.pictureContainer}>
        <Image
          src={Picture}
          width={2976}
          height={2976}
          alt="profile Picture"
          className={styles.picture}
        />
      </div>
      <Link href="/accueil">
        <h1>Thérèse BAZIN</h1>
      </Link>
      <h3>
        <span>
          <Typewriter
            words={[" Développeuse Front-End", " Développeuse React "]}
            loop
            cursor
            cursorStyle="|"
            cursorColor="green"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3>
    </div>
  );
};

export default Home;
