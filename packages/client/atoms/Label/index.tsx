import React, { FC } from "react";
import styles from "./styles.module.css";

interface LabelProps {
  htmlFor: string;
  text: string;
}

const Label: FC<LabelProps> = (props) => {
  const { htmlFor, text } = props;

  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
    </label>
  );
};

export default Label;
