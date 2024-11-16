import React, { useEffect, useRef, useState } from "react";
import styles from "./experienceCard.module.scss";
import Link from "next/link";

interface Slide {
  title: string;
  id: number;
  text: string;
  lien?: string;
  liste: List[];
}

interface List {
  id: number;
  text: string;
}
const ExperienceCard = ({ slide, index }: { slide: Slide; index: number }) => {
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
      {slide.lien ? (
        <a className={styles.title} href={slide.lien} target="_blank">
          {slide.text}
        </a>
      ) : (
        <p className={styles.title}>{slide.text}</p>
      )}

      {slide.liste && (
        <ul className={styles.liste}>
          {slide.liste.map((item: List) => (
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
