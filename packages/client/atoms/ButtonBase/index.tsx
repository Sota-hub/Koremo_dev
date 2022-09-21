import React, { FC } from "react";
import styles from "./styles.module.css";
import { BgColor } from "@koremo/enums";

interface ButtonBaseProps {
  bgColor: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonBase: FC<ButtonBaseProps> = (props) => {
  const { bgColor, children, onClick } = props;

  if (bgColor === BgColor.Blue) {
    return (
      <span className={`${styles.button} ${styles.blue}`} onClick={onClick}>
        {children}
      </span>
    );
  }

  if (bgColor === BgColor.Pink) {
    return (
      <span className={`${styles.button} ${styles.pink}`} onClick={onClick}>
        {children}
      </span>
    );
  }

  return (
    <span className={styles.button} onClick={onClick}>
      {children}
    </span>
  );
};

export default ButtonBase;
