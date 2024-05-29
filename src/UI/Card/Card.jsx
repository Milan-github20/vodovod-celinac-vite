import React from "react";
import styles from "./Card.module.css";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const CustomCard = ({ title, description, icon, click }) => {
  return (
    <NavLink to={click} className={styles.cardLink}>
      <Card className={styles.card} cover={icon} hoverable>
        <Meta title={title} description={description} />
      </Card>
    </NavLink>
  );
};

export default CustomCard;
