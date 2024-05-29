import React from "react";
import { HomePageCard } from "../konstante/konstante";
import CustomCard from "../UI/Card/Card";
import styles from "./Root.module.css";

const HomePage = () => (
  <div className={styles.CustomCard}>
    {HomePageCard.map((card) => {
      console.log(card.openKey);
      return (
        <div className={styles.card} key={card.title}>
          <CustomCard
            click={card.click}
            link={card.click}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        </div>
      );
    })}
  </div>
);
export default HomePage;
