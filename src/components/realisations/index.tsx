import React from "react";
import styles from "./realisations.module.scss";
import Image from "next/image";
import Link from "next/link";

//IMG
import Hypnose from "./assets/elisabeth.png";
import Hazel from "./assets/Hazl.png";
import PetWebsite from "./assets/petWebsite.png";

const Realisations = () => {
  // const images = [Hypnose, PetWebsite, Hazel];
  const sites = [
    { img: Hypnose, lien: "https://elisabethfournier.fr" },
    { img: PetWebsite, lien: "https://github.com/tess74600/Petwebsite" },
    { img: Hazel, lien: "https://github.com/tess74600/Maquette2-SASS" },
  ];

  return (
    <div className={styles.realisationsContainer} id="realisations">
      <h2>Réalisations </h2>
      <div className={styles.imagesContainer}>
        {sites.map((site) => (
          <div className={styles.imageContainer}>
            <Link href={site.lien} target="_blank">
              <Image
                src={site.img}
                width={400}
                height={400}
                alt="site apercu"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;
