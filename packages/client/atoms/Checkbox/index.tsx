import React, { FC } from "react";
import styles from "./styles.module.css";
import {CheckboxProps} from "../../types/checkbox"

const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, onChange } = props;
  
  return (
    <input
      type="checkbox"
      id="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={onChange && onChange}
    />
  );
};

export default Checkbox;
