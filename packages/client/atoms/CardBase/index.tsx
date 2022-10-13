import React, { FC } from "react";
import styles from "./styles.module.css";

interface CardBaseProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CardBase: FC<CardBaseProps> = (props) => {
  const { onClick, children } = props;

  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
};

export default CardBase;
