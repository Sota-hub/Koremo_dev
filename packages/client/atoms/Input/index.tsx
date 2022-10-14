import React, { FC } from "react";
import styles from "./styles.module.css";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  id?: string;
  onChange?: (v: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const { type, name, placeholder, value, id, onChange } = props;

  if (onChange) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        id={id}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={styles.input}
      id={id}
    />
  );
};

export default React.memo(Input);
