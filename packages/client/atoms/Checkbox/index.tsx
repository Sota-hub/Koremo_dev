import React, { FC } from "react";
import styles from "./styles.module.css";

const Checkbox: FC = (props) => {
  return <input type="checkbox" id="checkbox" className={styles.checkbox} />;
};

export default Checkbox;
