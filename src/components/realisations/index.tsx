import React from "react";
import styles from "./realisations.module.scss";
import Image from "next/image";
import Link from "next/link";

//IMG
import Hypnose from "./assets/elisabeth.png";
import Hazel from "./assets/Hazl.png";
import PetWebsite from "./assets/petWebsite.png";

const Realisations = () => {
  const images = [Hypnose, PetWebsite, Hazel];

  return (
    <div className={styles.realisationsContainer} id="realisations">
      <h2>Réalisations </h2>
      <div className={styles.imagesContainer}>
        {images.map((img) => (
          <Link href="https://www.google.com">
            <Image src={img} width={400} height={400} alt="site apercu" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Realisations;
