import React from "react";
import styles from "./experiences.module.scss";
import { data } from "./experiences";
//COMPONENTS
import ExperienceCard from "../experienceCard";
const Experiences = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.experiencesContainer} id="experiences">
        <h2> Expériences professionnelles</h2>
        <div className={styles.cardsContainer}>
          {data.map((slide, index) => (
            <ExperienceCard
              key={slide.id}
              slide={slide}
              index={index}
            ></ExperienceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
