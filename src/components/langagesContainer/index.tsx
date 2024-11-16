import React from "react";
import styles from "./langages.module.scss";

//COMPONENTS
import LangageIcon from "../langagesIcon";

const LangagesContainer = () => {
  const langages = [
    "HTML",
    "CSS3",
    "JavaScript",
    "SASS",
    "TypeScript",
    "REACT",
    "Next",
    "TailWind",
    "GitHub",
  ];
  return (
    <div className={styles.langageIconContainer}>
      <div className={styles.scrollingDiv}>
        {langages.map((langage, index) => (
          <LangageIcon key={index} title={langage} />
        ))}
      </div>
    </div>
  );
};

export default LangagesContainer;
