import React, { FC } from "react";
import styles from "./styles.module.css";

interface AlertProps {
  message: string;
}

const Alert: FC<AlertProps> = (props) => {
  const { message } = props;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
