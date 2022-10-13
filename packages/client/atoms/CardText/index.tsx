import React, { FC } from "react";
import { CardTextProps } from "../../types/cardText";
import styles from "./styles.module.css";

const CardText: FC<CardTextProps> = (props) => {
  const { mainText, subText } = props;

  return (
    <div className={styles.container}>
      <p className={styles.mainText}>{mainText}</p>
      <p className={styles.subText}>{subText}</p>
    </div>
  );
};

export default CardText;
