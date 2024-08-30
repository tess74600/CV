import React from "react";
import styles from "./langages.module.scss";

//COMPONENTS
import LangageIcon from "../langagesIcon";
const LangagesContainer = () => {
  return (
    <div className={styles.langageIconContainer}>
      <div className={styles.scrollingDiv}>
        <LangageIcon title={"HTML"} />
        <LangageIcon title={"CSS3"} />
        <LangageIcon title={"JavaScript"} />
        <LangageIcon title={"REACT"} />
        <LangageIcon title={"SASS"} />
        <LangageIcon title={"GitHub"} />
        <LangageIcon title={"TypeScript"} />
        <LangageIcon title={"Next"} />
      </div>
    </div>
  );
};

export default LangagesContainer;
