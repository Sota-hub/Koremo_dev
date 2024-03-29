import React, { FC } from "react";
import styles from "./styles.module.css";
import { BgColor } from "@koremo/enums";

interface ButtonBaseProps {
  bgColor: number;
  children: React.ReactNode;
  form?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonBase: FC<ButtonBaseProps> = (props) => {
  const { bgColor, children, form, onClick, disabled } = props;

  let bgStyle = styles.transparent;
  if (bgColor === BgColor.Blue) {
    bgStyle = styles.blue;
  } else if (bgColor === BgColor.Pink) {
    bgStyle = styles.pink;
  }

  return (
    <button
      className={`${styles.button} ${bgStyle} ${disabled && styles.disabled}`}
      form={form}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
