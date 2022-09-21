import React, { FC } from "react";
import styles from "./styles.module.css";
import { ButtonTextProps } from "../../types/buttonText";
import { TextColor } from "@koremo/enums";

const ButtonText: FC<ButtonTextProps> = (props) => {
  const { text, textColor } = props;

  return (
    <p className={textColor === TextColor.White ? styles.white : styles.black}>
      {text}
    </p>
  );
};

export default ButtonText;
