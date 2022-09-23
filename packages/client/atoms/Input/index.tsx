import React, { FC } from "react";
import styles from "./styles.module.css";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  id?: string;
  onChange?: (v: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const { type, name, placeholder, id, onChange } = props;

  if (onChange) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
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
      className={styles.input}
      id={id}
    />
  );
};

export default React.memo(Input);
