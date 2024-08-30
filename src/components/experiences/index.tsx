import React from "react";
import styles from "./experiences.module.scss";

//COMPONENTS
import ExperienceCard from "../experienceCard";
const Experiences = () => {
  const data = [
    {
      id: 1,
      title: "Juillet 2024 - actuel",
      text: " Création d'un site vitrine pour une future praticienne en hypnose",
      liste: [
        {
          id: 1,
          text: " Rencontre avec la cliente, analyse de sa demande et des besoins des internautes",
        },
        {
          id: 2,
          text: "Elaboration d'une maquette et d'un design",
        },
        {
          id: 3,
          text: "Réalisation du site en REACT et SASS",
        },
        {
          id: 4,
          text: " A venir: Mise en ligne, maintenance et amélioration progressive du site",
        },
      ],
    },
    {
      id: 2,

      title: "Mars 2024 - actuel",
      text: " Reproduction d'une maquette from scratch:  site de vente d'articles pour animaux domestiques",
      liste: [
        {
          id: 1,
          text: " Utilisation de Next, React, Typescript, SASS et Git",
        },
        {
          id: 2,
          text: " Analyse de la maquette sur Figma",
        },
      ],
    },
    {
      id: 3,

      title: "Janvier 2023 - actuel",
      text: "  Reproduction de plusieurs maquettes",
      liste: [
        {
          id: 1,
          text: " Utilisation de Next, React, Typescript, SASS et Git",
        },
      ],
    },
    {
      id: 4,

      title: "Mars 2019 - Juillet 2023",
      text: "  Crêpière ",
      liste: [
        {
          id: 1,
          text: "Tournage des crêpes et garnissage",
        },
        {
          id: 2,
          text: " Prise de commande en salle et service à l'assiette",
        },
        {
          id: 3,
          text: "Encaissements et prise de réservations",
        },
        { id: 4, text: "Gestion des stocks et des commandes fournisseur" },
        {
          id: 5,
          text: "Aide dans la gestion administrative de l'établissement",
        },
      ],
    },
    {
      id: 5,

      title: "Septembre 2010 - Juillet 2017",
      text: " Orthophoniste libérale",
      liste: [
        {
          id: 1,
          text: "Gestion d'un cabinet libéral (administratif, comptabilité, prise de rdv)",
        },
        {
          id: 2,
          text: " Rencontre avec le patient, anamnèse, bilans diagnostics",
        },
        {
          id: 3,
          text: "Elaboration de plans de prise en charge personnalisés",
        },

        {
          id: 4,
          text: "Guidance des proches et des aidants",
        },
      ],
    },
  ];
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
