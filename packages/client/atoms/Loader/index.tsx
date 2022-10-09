import React, { FC } from "react";
import styles from "./styles.module.css";

const Loader: FC = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
