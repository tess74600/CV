import React, { useEffect, useRef, useState } from "react";
import styles from "./experienceCard.module.scss";
const ExperienceCard = ({ slide, index }: { slide: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Désactive l'observation après l'apparition
          }
        });
      },
      {
        root: null, // Fenêtre par défaut
        threshold: 0.1, // Déclenche l'apparition lorsqu'un tout petit peu de l'élément est visible
        rootMargin: "0px 0px -50px 0px", // Active plus tôt
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.experienceCardContainer} ${
        isVisible ? styles.show : ""
      } ${index % 2 === 0 ? styles.fromLeft : styles.fromRight}`}
    >
      <h3 className={styles.date}>{slide.title}</h3>
      <a className={styles.title}>{slide.text}</a>

      {slide.liste && (
        <ul className={styles.liste}>
          {slide.liste.map((item: any) => (
            <li key={item.id} className={styles.item}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
