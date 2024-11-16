"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./accueil.module.scss";
import Presentation from "@/components/presentationPage";
import LangagesContainer from "@/components/langagesContainer";
import Formations from "@/components/formations";
import Experiences from "@/components/experiences";
import NavBar from "@/components/navBar";
import Realisations from "@/components/realisations";
import Contact from "@/components/contact";
const Accueil = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.accueilContainer}>
      <NavBar />
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />

      <Presentation />
      <LangagesContainer />
      <Experiences />
      <Realisations />
      <Formations />
      <Contact />
    </div>
  );
};

export default Accueil;
