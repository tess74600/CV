import React from "react";
import styles from "./langageIcon.module.scss";
import Image from "next/image";

//IMG
import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import JS from "./assets/Javascript.png";
import ReactImg from "./assets/REACT.png";
import Sass from "./assets/SASS.png";
import Github from "./assets/Github.png";
import TypeScript from "./assets/TypeScript.png";
import Next from "./assets/Next.png";
import TailWind from "./assets/Tailwind.png";
const LangageIcon = ({ title }: { title: string }) => {
  const imgSwitch = (parametre: string) => {
    switch (parametre) {
      case "HTML":
        return <Image src={HTML} alt="" />;
        break;
      case "CSS3":
        return <Image src={CSS} alt="" />;
        break;
      case "JavaScript":
        return <Image src={JS} alt="" />;
        break;
      case "REACT":
        return <Image src={ReactImg} alt="" />;
        break;
      case "Next":
        return <Image src={Next} alt="" />;
        break;
      case "SASS":
        return <Image src={Sass} alt="" />;
        break;
      case "TypeScript":
        return <Image src={TypeScript} alt="" />;
        break;
      case "TailWind":
        return <Image src={TailWind} alt="" />;
        break;
      case "GitHub":
        return <Image src={Github} alt="" />;
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.langageIcon}>
      {imgSwitch(title)}
      <p>{title}</p>
    </div>
  );
};

export default LangageIcon;
