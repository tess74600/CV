"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Picture from "./profilePicture.jpg";
import { Typewriter } from "react-simple-typewriter";
import Accueil from "@/components/accueil";

const Home = () => {
  const [showSecond, setShowSecond] = useState(false);
  useEffect(() => {
    const totalDuration = 70 * 12 + 1000;
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);
  const [showAccueil, setShowAccueil] = useState(false);
  return (
    <>
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

        <h1>Thérèse BAZIN</h1>

        <span>
          <Typewriter
            words={[" Développeuse "]}
            loop={1}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => setShowSecond(true)}
          />
        </span>
        {showSecond && (
          <span>
            <Typewriter
              words={[" Front-End", "React "]}
              loop
              cursor
              cursorStyle="|"
              cursorColor="green"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        )}
      </div>
      <Accueil />
    </>
  );
};

export default Home;
