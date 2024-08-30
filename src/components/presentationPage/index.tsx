import React from "react";
import styles from "./presentation.module.scss";

const Presentation = () => {
  return (
    <div className={styles.presentationContainer}>
      <div className={styles.textContainer}>
        Développeuse Front-End Junior motivée, je me réoriente dans l'univers du
        développement web après une carrière enrichissante de 8 ans en tant
        qu'orthophoniste et 4 ans comme crêpière. Curieuse et rigoureuse, j'ai
        développé des compétences en communication, précision et gestion de
        projets complexes, que je mets désormais au service de ma nouvelle
        passion pour le code. Je suis à la recherche de défis stimulants pour
        continuer à apprendre et à me challenger.
      </div>
      <button className={styles.CvContainer}>
        <a href="/CV.pdf" target="_blank">
          Télécharger mon CV
        </a>
      </button>
    </div>
  );
};

export default Presentation;
