import React from "react";
import styles from "./formations.module.scss";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const Formations = () => {
  return (
    <div className={styles.formationsContainer} id="formations">
      <h2>Formations</h2>
      <div className={styles.formations}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={styles.timeContent}>
              <b> Janvier 2023 - ...</b> Bachelor Developpeur Full-Stack chez
              Studi <br />
              Formation à distance (FromScratch,GrafikArt, W3School, MDN...)
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="grey" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={styles.timeContent}>
              <b> Mars 2019</b> Titre Crêpier au CLPS de Brest
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={styles.timeContent}>
              <b> Juin 2010</b> Certificat de capacité d'orthophoniste
              (équivalent bac+5),Lille
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="grey" />
            </TimelineSeparator>
            <TimelineContent className={styles.timeContent}>
              <b> Juin 2005</b> BAC ES, mention AB
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Formations;
